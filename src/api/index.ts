import axios, { AxiosResponse } from "axios";
import Employee from "@/interface/Employee";

// Api class with all api-functions which are needed
export class EmployeesApi {
  private static employeesAxios = axios.create();

  static async getAll(): Promise<Employee[]> {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await this.employeesAxios.get(url);
    return response.data;
  }

  static async getById(id: string): Promise<Employee> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await this.employeesAxios.get(url);
    return response.data;
  }

  static async deleteById(id: number): Promise<AxiosResponse> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return await this.employeesAxios.delete(url);
  }
}
