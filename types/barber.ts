export interface IBarber {
  id: number;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  urLPhoto: string;
}

export const defaultBarber = {
  id: 0,
  name: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  isAdmin: false,
  urLPhoto: "",
};
