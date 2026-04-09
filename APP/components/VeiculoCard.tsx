        import type { Veiculo } from "../types/veiculo.ts";

interface Props {
  veiculo: Veiculo;
}

export function VeiculoCard({ veiculo }: Props) {
  return (
    <div style ={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>      
    <h2>{veiculo.modelo}</h2>
    <p>{veiculo.descricao}</p>

    <p>Ano: {veiculo.ano} / {veiculo.ano_modelo}</p>


  <strong>
{veiculo.valor.toLocaleString("pt-BR", {
style: "currency",
currency: "BRL",
})}
</strong>

</div>
  );

}