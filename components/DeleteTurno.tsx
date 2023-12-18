"use client";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ITurno, defaultTurno } from "@/types/turno";
import { AppointmentServices } from "@/services/appointment.services";
import { BarberServices } from "@/services/barber.services";
import { IBarber, defaultBarber } from "@/types/barber";
import { message } from "antd";
export function DeleteTurno({ turnoId }: { turnoId: string }) {
  const [turnoData, setTurnoData] = useState<ITurno | null>(defaultTurno);
  const [barber, setBarber] = useState<IBarber>(defaultBarber);
  const router = useRouter();

  useEffect(() => {
    AppointmentServices.getTurnoById(turnoId).then((res: { data: ITurno }) => {
      setTurnoData(res.data);
      if (res.data) {
        BarberServices.getBarberById(res.data.barberId).then(
          (res: { data: IBarber }) => {
            setBarber(res.data);
          }
        );
      }
    });
  }, [turnoId]);

  const handleDelete = () => {
    AppointmentServices.delete(turnoId).then(() => {
      setTimeout(() => {
        message.warning("Turno eliminado");
        router.push(`/confirmation/${turnoData?.name}`);
      }, 1000);
    });
  };
  return (
    <div className="grid place-items-center  h-[100vh] w-full">
      {turnoData?.id ? (
        <div className="flex flex-col gap-4 max-md:w-[95%] w-[50%] h-[50%] max-md:h-[40%] border rounded-md p-4 justify-around relative">
          <div className="flex items-center gap-4">
            <Image
              src={"/images/RESET_C_negro.png"}
              alt="Logo"
              width={50}
              className="max-sm:w-full "
              height={10}
            />
            <h2 className="text-3xl max-md:text-2xl">
              Cancelacion de turno | RESET - Hair Studio
            </h2>
          </div>

          <hr />

          <div className="text-xl max-md:text-lg">
            <p>
              Nombre: <b> {turnoData.name}</b>
            </p>
            <p>
              Fehca: <b> {turnoData.date}</b>
            </p>
            <p>
              Horario: <b> {turnoData.time}</b>
            </p>
            <p>
              Peluquero: <b> {barber.name} </b>
            </p>
          </div>
          <button
            onClick={handleDelete}
            className="border bg-selected w-full p-4 max-md:p-2 rounded-md text-white"
          >
            Canelar turno
          </button>
        </div>
      ) : turnoData === null ? (
        "Not Found!"
      ) : (
        <Loader />
      )}
    </div>
  );
}
