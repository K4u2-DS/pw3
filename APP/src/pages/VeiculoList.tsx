import { VeiculoCard } from "../components/VeiculoCard";
import { useVeiculos } from "../hooks/useVeiculos";

export function VeiculosList() {
  const { veiculos, loading, error, refetch } = useVeiculos();

  if (loading) {
    return <p>Carregando veículos...</p>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={refetch}>Tentar novamente</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de Veículos</h1>
      <button onClick={refetch}>Recarregar</button>

      {veiculos.map((v) => (
        <VeiculoCard key={v.id} veiculo={v} />
      ))}
    </div>
  );
}