 import { useRouter } from 'next/router';

export default function ItemDetail() {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <div>
      <h1>Detalle del Producto {itemId}</h1>
      {/* Lógica para mostrar el producto */}
    </div>
  );
}
