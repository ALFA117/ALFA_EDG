import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const GLYPHS = '#$%&@*<>/\\{}[]=+?01αΞ';
const DURATION_MS = 1400;
const GLITCH_EVERY_MS = 7000;
const GLITCH_MS = 450;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
const isBlank = (ch) => ch === ' ';

/**
 * Título del hero que se "descifra": cada letra muestra caracteres al azar
 * hasta fijarse, de izquierda a derecha con algo de ruido. La fuente es
 * mono, así que el ancho no brinca mientras cambia. Después, cada tanto,
 * las palabras resaltadas tienen un glitch corto.
 *
 * Lectores de pantalla y buscadores reciben el texto real (span sr-only); el cifrado es solo visual. Con movimiento reducido se
 * pinta el texto final de una vez.
 */
function ScrambleTitle({ text, highlight = [], id, className }) {
  const reduce = useReducedMotion();
  const words = useMemo(() => text.split(' '), [text]);
  const [shown, setShown] = useState(() => (reduce ? text : scrambleAll(text)));
  const [done, setDone] = useState(Boolean(reduce));
  const rafRef = useRef(0);

  // Descifrado inicial (y de nuevo si cambia el idioma).
  useEffect(() => {
    if (reduce) {
      setShown(text);
      setDone(true);
      return undefined;
    }
    setDone(false);
    // Cada letra se fija en un momento propio: avance lineal + ruido.
    const lockAt = [...text].map((_, i) => (i / text.length) * DURATION_MS * 0.8 + Math.random() * DURATION_MS * 0.2);
    let start = 0;
    let last = 0;
    const tick = (now) => {
      if (!start) start = now;
      const t = now - start;
      // ~30 fps de cambio de glifos: más rápido se ve como ruido gris.
      if (now - last > 33) {
        last = now;
        setShown([...text].map((ch, i) => (isBlank(ch) || t >= lockAt[i] ? ch : randomGlyph())).join(''));
      }
      if (t < DURATION_MS) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setShown(text);
        setDone(true);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [text, reduce]);

  // Glitch periódico en las palabras resaltadas; se pausa con la pestaña oculta.
  useEffect(() => {
    if (reduce || !done || highlight.length === 0) return undefined;
    const ranges = [];
    let offset = 0;
    words.forEach((word, i) => {
      if (highlight.includes(i)) ranges.push([offset, offset + word.length]);
      offset += word.length + 1;
    });
    let timer;
    let glitchTimer;
    const glitch = () => {
      if (document.hidden) return;
      const [from, to] = ranges[Math.floor(Math.random() * ranges.length)];
      const chars = [...text];
      let frames = 0;
      glitchTimer = setInterval(() => {
        frames += 1;
        if (frames * 50 >= GLITCH_MS) {
          clearInterval(glitchTimer);
          setShown(text);
          return;
        }
        setShown(
          chars
            .map((ch, i) => (i >= from && i < to && Math.random() < 0.45 && !isBlank(ch) ? randomGlyph() : ch))
            .join('')
        );
      }, 50);
    };
    timer = setInterval(glitch, GLITCH_EVERY_MS);
    return () => {
      clearInterval(timer);
      clearInterval(glitchTimer);
    };
  }, [done, reduce, highlight, text, words]);

  // Reparte el texto mostrado en las mismas palabras que el original, para
  // que los saltos de línea no cambien durante la animación.
  const shownChars = [...shown];
  let cursor = 0;
  const pieces = words.map((word, i) => {
    const len = [...word].length;
    const visible = shownChars.slice(cursor, cursor + len).join('');
    cursor += len + 1;
    const isLast = i === words.length - 1;
    const isHot = highlight.includes(i);
    return (
      <React.Fragment key={i}>
        <span
          className={'scramble__word' + (isHot ? ' scramble__word--hot' : '') + (isHot && done ? ' is-drawn' : '')}
        >
          {visible}
          {isLast && <span className="blink-cursor" aria-hidden="true" />}
        </span>
        {!isLast && ' '}
      </React.Fragment>
    );
  });

  return (
    <h1 id={id} className={'scramble ' + (className || '')}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{pieces}</span>
    </h1>
  );
}

function scrambleAll(text) {
  return [...text].map((ch) => (isBlank(ch) ? ch : randomGlyph())).join('');
}

export default ScrambleTitle;
