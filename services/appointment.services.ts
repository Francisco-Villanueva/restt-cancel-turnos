import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class AppointmentServices {
  static async getTurnoById(turnoId: string) {
    return await axios.get(`${API_URL}/appointment/${turnoId}`);
  }
  static async delete(turnoId: string) {
    return await axios.delete(`${API_URL}/appointment/${turnoId}`);
  }
}
