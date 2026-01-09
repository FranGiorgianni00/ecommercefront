 // components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/signin">Login</Link></li>
        <li><Link href="/profile">Perfil</Link></li>
        <li><Link href="/search">Buscar</Link></li>
        <li><Link href="/logout">Logout</Link></li>
        <li><Link href="/thanks">Gracias</Link></li>
      </ul>
    </nav>
  );
}
