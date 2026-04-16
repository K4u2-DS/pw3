import { VeiculoCard } from "../components/VeiculoCard";
import { useVeiculos } from "../hooks/useVeiculos";

// import { useEffect, useState } from "react";
// import { getVeiculos } from "../services/veiculoService";
// import type { Veiculo } from "../types/veiculo";

export function VeiculosList() {
  const { veiculos, loading, error } = useVeiculos();

  // const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  // useEffect(() => {
  //   getVeiculos().then(setVeiculos);
  // }, []);

  if (loading) {
    return <p>Carregando veículos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Lista de Veículos</h1>

      {veiculos.map((v) => (
        <VeiculoCard key={v.id} veiculo={v} />
      ))}
    </div>
  );
}