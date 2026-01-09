 import { useRouter } from 'next/router';

export default function Checkout() {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <div>
      <h1>Checkout del Producto {itemId}</h1>
      {/* Lógica para procesar el pago */}
    </div>
  );
}
