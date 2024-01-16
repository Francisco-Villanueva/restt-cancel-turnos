import { DeleteTurno } from "@/components/DeleteTurno";

export default function page({ params: { id } }: { params: { id: string } }) {
  return <DeleteTurno turnoId={id} />;
}
