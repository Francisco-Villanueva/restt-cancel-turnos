import { DeleteTurno } from "@/components/DeleteTurno";
import React from "react";

export default function page({ params: { id } }: { params: { id: string } }) {
  return <DeleteTurno turnoId={id} />;
}
