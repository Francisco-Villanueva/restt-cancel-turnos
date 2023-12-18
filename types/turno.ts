export interface ITurno {
  id: string;
  name: string;
  phone: string;
  time: string;
  email: string;
  date: string;
  barberId: number;
}

export const defaultTurno = {
  id: "",
  name: "cliente",
  phone: "",
  time: "16:00",
  email: "",
  date: " 2023-12-19",
  barberId: 0,
};
