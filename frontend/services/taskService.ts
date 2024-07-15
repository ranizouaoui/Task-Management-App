import axios, { AxiosResponse } from 'axios';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

class TaskService {
  private static async handleResponse<T>(response: Promise<AxiosResponse<T>>): Promise<T> {
    try {
      const result = await response;
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(`Error: ${error.response.status} - ${error.response.data}`);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }

  static async getTasks(): Promise<Task[]> {
    return this.handleResponse<Task[]>(axios.get(`${API_BASE_URL}/tasks`));
  }

  static async getTaskById(id: string): Promise<Task> {
    return this.handleResponse<Task>(axios.get(`${API_BASE_URL}/tasks/${id}`));
  }

  static async createTask(task: Partial<Task>): Promise<void> {
    await this.handleResponse<void>(axios.post(`${API_BASE_URL}/tasks`, task));
  }

  static async deleteTask(id: number): Promise<void> {
    await this.handleResponse<void>(axios.delete(`${API_BASE_URL}/tasks/${id}`));
  }

  static async updateTask(id: string, task: Partial<Task>): Promise<void> {
    await this.handleResponse<void>(axios.put(`${API_BASE_URL}/tasks/${id}`, task));
  }
}

export default TaskService;
