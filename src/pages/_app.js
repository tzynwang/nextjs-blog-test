import { useEffect } from 'react';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  /* Hooks */
  useEffect(() => {
    const h = document.querySelector('html');
    if (h) {
      h.dataset.theme = 'forest';
    }
  }, []);

  /* Main */
  return <Component {...pageProps} />;
}
