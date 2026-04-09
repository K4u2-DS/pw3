
interface Props {
  mensagem: string;
}

export function ListaVazia({ mensagem }: Props) {
  return (
    <div style ={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>      
      <p>{mensagem}</p>
    </div>
  );
}
