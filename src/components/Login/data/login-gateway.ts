import { Repository } from '../../../_shared/interfaces';
import { AuthenticateStruct } from './interface';
import { AxiosInstance } from 'axios';

export class LiveLoginGateway implements Repository<AuthenticateStruct, string> {
  constructor(private api: AxiosInstance) {}
  public async find({ username, password }: AuthenticateStruct): Promise<string> {
    const response = await this.api.post<{ token: string }>('/authn/login', {
      username,
      password
    });
    const { token } = response.data;
    return token;
  }
}

export class LocalLoginGateway implements Repository<AuthenticateStruct, string> {
  constructor(private api: AxiosInstance) {}
  public async find(details: AuthenticateStruct): Promise<string> {
    return Promise.resolve('Auth_token');
  }
}
