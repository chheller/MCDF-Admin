import { Repository } from '../../../_shared/interfaces';
import { AuthenticateStruct } from './interface';
import { AxiosInstance } from 'axios';

export class LiveAuthenticateGateway implements Repository<void, string> {
  constructor(private api: AxiosInstance) {}

  public async find(): Promise<string> {
    const response = await this.api.post<string>('/authn/refresh');
    return response.data;
  }
}

export class LocalAuthenticateGateway implements Repository<AuthenticateStruct, string> {
  constructor(private api: AxiosInstance) {}
  public async find(): Promise<string> {
    return Promise.resolve('Auth_token');
  }
}
