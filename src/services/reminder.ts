import axios from 'axios';
import Reminder from '../models/reminder';


class ReminderListService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  })

  async getReminders() {
    const response = await this.http.get<Reminder[]>('/todos');
    return response.data;
  }
  async addReminders(title: string) {
    const response = await this.http.post<Reminder>("/todos", {title});
    return response.data;
  }
  async removeReminders(id: number) {
    const response = await this.http.delete("/todos/" + {id});
    return response.data;
  }
}

export default new ReminderListService()