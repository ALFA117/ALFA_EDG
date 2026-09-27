import React, { useEffect, useId, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import './ui.css';

const pressSpring = { type: 'spring', stiffness: 400, damping: 22 };

/**
 * Botón base. variant: primary | secondary | ghost. Con `href` renderiza
 * un <a>. `loading` deshabilita, muestra spinner y anuncia el estado.
 */
export function Button({
  variant = 'primary',
  loading = false,
  disabled = false,
  href,
  icon,
  iconEnd,
  children,
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = href ? motion.a : motion.button;
  const isDisabled = disabled || loading;
  return (
    <Tag
      className={`btn btn--${variant} ${loading ? 'is-loading' : ''} ${className}`}
      href={href}
      type={href ? undefined : rest.type || 'button'}
      disabled={href ? undefined : isDisabled}
      aria-disabled={isDisabled || undefined}
      aria-busy={loading || undefined}
      whileTap={reduce || isDisabled ? undefined : { scale: 0.97 }}
      transition={pressSpring}
      {...rest}
    >
      {loading ? <span className="btn__spinner" aria-hidden="true" /> : icon}
      <span className="btn__label">{children}</span>
      {!loading && iconEnd}
    </Tag>
  );
}

/** Input con label visible, ayuda persistente y error debajo con role=alert. */
export function Input({ label, hint, error, className = '', ...rest }) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={`field ${error ? 'has-error' : ''} ${className}`}>
      <label className="field__label" htmlFor={id}>{label}</label>
      <input
        id={id}
        className="field__input"
        aria-invalid={error ? true : undefined}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        {...rest}
      />
      {hint && <p id={hintId} className="field__hint">{hint}</p>}
      {error && <p id={errorId} className="field__error" role="alert">{error}</p>}
    </div>
  );
}

/** Contenedor de tarjeta: superficie + borde + radio del sistema. */
export function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return <Tag className={`card ${className}`} {...rest}>{children}</Tag>;
}

/** Bloque de carga con la forma real de lo que va a aparecer. */
export function Skeleton({ className = '', style }) {
  return <span className={`skeleton ${className}`} style={style} aria-hidden="true" />;
}

/** Estado vacío: qué pasó y qué hacer a continuación. */
export function EmptyState({ title, body, action }) {
  return (
    <div className="state state--empty" role="status">
      <p className="state__title">{title}</p>
      {body && <p className="state__body">{body}</p>}
      {action}
    </div>
  );
}

/** Estado de error: causa, cómo arreglarlo y botón para reintentar. */
export function ErrorState({ title, cause, fix, onRetry, retryLabel }) {
  return (
    <div className="state state--error" role="alert">
      <p className="state__title">{title}</p>
      {cause && <p className="state__body">{cause}</p>}
      {fix && <p className="state__body">{fix}</p>}
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>{retryLabel}</Button>
      )}
    </div>
  );
}

/**
 * Toast no intrusivo: aria-live polite, no roba foco, se cierra solo a los
 * 4 s. `message` en null lo oculta.
 */
export function Toast({ message, onDone, duration = 4000 }) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(message);
  useEffect(() => {
    setShown(message);
    if (!message) return undefined;
    const id = setTimeout(() => {
      setShown(null);
      onDone?.();
    }, duration);
    return () => clearTimeout(id);
  }, [message, duration, onDone]);
  return (
    <div className="toast-region" aria-live="polite">
      <AnimatePresence>
        {shown && (
          <motion.div
            className="toast"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, transition: { duration: 0.15 } }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {shown}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Trunca en medio (inicio…final) cadenas largas como dominios o
 * direcciones; el texto completo queda en title y para lectores de pantalla.
 */
export function MiddleTruncate({ text, head = 14, tail = 10, className = '' }) {
  const short = text.length > head + tail + 1 ? `${text.slice(0, head)}…${text.slice(-tail)}` : text;
  return (
    <span className={`t-num ${className}`} title={text}>
      <span aria-hidden="true">{short}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
