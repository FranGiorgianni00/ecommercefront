// pages/_app.js
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Esto muestra el menú en todas las páginas */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
 