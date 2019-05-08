import { AxiosInstance } from 'axios';
import { AdminService } from './interface';

export class LiveAdministrationGateway implements AdminService {
  constructor(private api: AxiosInstance) {}
  public async restart() {
    const response = await this.api.post(`/server/restart`);
  }
}

export class LocalAdministrationGateway implements AdminService {
  constructor(private api: AxiosInstance) {}
  public async restart() {
    return;
  }
}
