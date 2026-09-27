import React from 'react';
import { ErrorState } from './ui';

// Un error de render en cualquier parte desmontaría React y dejaría la
// página en blanco. Esto lo atrapa, explica qué pasó, ofrece reintentar y
// deja a la mano el contacto directo. Vive fuera de LanguageProvider (por
// si el error viene de ahí), así que usa el idioma guardado directamente.
function storedLanguage() {
  try {
    return window.localStorage.getItem('alfa-edg-lang') === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

const copy = {
  es: {
    title: 'Algo falló al mostrar esta página.',
    cause: 'Un error del sitio interrumpió la carga; no es algo que hayas hecho tú.',
    fix: 'Reintenta. Si vuelve a pasar, escríbeme directo:',
    retry: 'Reintentar',
  },
  en: {
    title: 'Something broke while showing this page.',
    cause: 'A site error interrupted loading — nothing you did.',
    fix: 'Try again. If it keeps happening, reach me directly:',
    retry: 'Try again',
  },
};

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ALFA-EDG render error:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    const c = copy[storedLanguage()];
    return (
      <main className="error-page">
        <ErrorState
          title={c.title}
          cause={c.cause}
          fix={
            <>
              {c.fix}{' '}
              <a href="mailto:edgarlopezbaeza.ing@gmail.com">edgarlopezbaeza.ing@gmail.com</a> ·{' '}
              <a href="https://wa.me/525655102956">WhatsApp</a>
            </>
          }
          onRetry={() => window.location.reload()}
          retryLabel={c.retry}
        />
      </main>
    );
  }
}

export default ErrorBoundary;
