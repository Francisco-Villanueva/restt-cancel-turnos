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
  name: "",
  phone: "",
  time: "",
  email: "",
  date: "",
  barberId: 0,
};
