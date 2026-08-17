import React from 'react';

// A render error anywhere in the tree would otherwise unmount React and
// leave a blank white page — no nav, no way to reach the contact links.
// This catches it and still gives the visitor a way to reach out.
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ALFA-EDG render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '24px',
            textAlign: 'center',
            background: '#07090a',
            color: '#e8efe9',
            fontFamily: "'JetBrains Mono', 'Consolas', monospace",
          }}
        >
          <p style={{ fontSize: '1.1rem', margin: 0 }}>Something broke on this page.</p>
          <p style={{ color: '#7c8b81', margin: 0, fontSize: '0.9rem' }}>
            Reach me directly at{' '}
            <a href="mailto:edgarlopezbaeza.ing@gmail.com" style={{ color: '#3ee878' }}>
              edgarlopezbaeza.ing@gmail.com
            </a>{' '}
            or on{' '}
            <a href="https://wa.me/525655102956" style={{ color: '#3ee878' }}>
              WhatsApp
            </a>
            .
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
