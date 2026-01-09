 import { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulamos una llamada al backend para obtener los datos del usuario
    const fetchUserData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulamos un delay
      setUser({ name: 'Juan Pérez', email: 'juanperez@test.com' }); // Datos de ejemplo
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <h1>Cargando...</h1>; // Mensaje mientras se cargan los datos
  }

  return (
    <div>
      <h1>Perfil de {user.name}</h1>
      <p>Email: {user.email}</p>
      {/* Agregá más información del usuario si es necesario */}
    </div>
  );
}

