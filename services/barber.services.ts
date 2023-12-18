import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class BarberServices {
  static async getAllBarbers() {
    return await axios.get(`${API_URL}/barbers`);
  }
  static async getBarberById(barberId: number) {
    return await axios.get(`${API_URL}/barbers/${barberId}`);
  }
}
