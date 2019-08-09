import { AxiosInstance } from 'axios';
import { AdminService } from './interface';
import { ServerStatus } from '../types';

export class LiveAdministrationGateway implements AdminService {
  constructor(private api: AxiosInstance) {}
  public async restart() {
    const response = await this.api.post(`/server/restart`);
  }
  public async getServerStatus() {
    const response = await this.api.get<ServerStatus>(`/administration/server/status`);
    return response.data;
  }
}

export class LocalAdministrationGateway implements AdminService {
  constructor(private api: AxiosInstance) {}
  public async restart() {
    return;
  }
  public async getServerStatus() {
    const statuses = [ServerStatus.online, ServerStatus.offline, ServerStatus.restarting];
    const idx = Math.round(Math.random() * 2);
    return statuses[idx];
  }
}
