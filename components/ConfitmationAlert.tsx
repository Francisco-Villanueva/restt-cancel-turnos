import { ITurno } from "@/types/turno";
import Image from "next/image";
import React from "react";

export default function ConfitmationAlert({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center gap-10 w-1/3 p-10 border rounded-lg bg-white  backdrop-blur-3xl ">
      <header className="flex flex-col gap-2 w-5/6">
        <h1 className="font-semibold text-3xl text-error">Turno eliminado!</h1>
        <hr />
        <span>
          <i>{name}</i> su turno ha sido{" "}
          <strong className="text-error">eliminado correctamente</strong>
        </span>
      </header>
      <Image
        src="/images/RESET_C_negro.png"
        alt="reset logo"
        height={40}
        width={250}
        priority={true}
      />
    </div>
  );
}
