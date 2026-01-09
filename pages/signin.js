 import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simulamos una llamada al backend con un delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulamos que la autenticación fue exitosa si el email es "test@test.com" y password "1234"
    if (email === 'test@test.com' && password === '1234') {
      console.log('Usuario autenticado:', { email });
      // Acá podrías redirigir o mostrar mensaje de éxito
    } else {
      console.error('Error en la autenticación: usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
