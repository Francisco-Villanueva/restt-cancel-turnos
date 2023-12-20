import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_API_KEY;

export class BarberServices {
  static async getAllBarbers() {
    return await axios.get(`${API_URL}/barbers/?API_KEY=${API_KEY}`);
  }
  static async getBarberById(barberId: number) {
    return await axios.get(
      `${API_URL}/barbers/${barberId}/?API_KEY=${API_KEY}`
    );
  }
}
