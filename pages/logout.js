 import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Acá borrás el token o lo que uses para autenticar
    // Por ejemplo: localStorage.removeItem('token');
    // Después redirigís a la home
    router.replace('/');
  }, [router]);

  return <p>Deslogueando...</p>;
}
