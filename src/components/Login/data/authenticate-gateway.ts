import { AuthenticationService, AuthenticateStruct } from './interface';
import { AxiosInstance } from 'axios';

export class LiveAuthenticateGateway implements AuthenticationService {
  constructor(private api: AxiosInstance) {}

  public async refresh(): Promise<string> {
    const response = await this.api.post<string>('/authn/refresh');
    return response.data;
  }
  public async authenticate({ username, password }: AuthenticateStruct): Promise<string> {
    const response = await this.api.post<{ token: string }>('/authn/login', {
      username,
      password
    });
    const { token } = response.data;
    return token;
  }
}

export class LocalAuthenticateGateway implements AuthenticationService {
  constructor(private api: AxiosInstance) {}
  public async refresh(): Promise<string> {
    return Promise.resolve('Auth_token');
  }
  public async authenticate(details: AuthenticateStruct): Promise<string> {
    return Promise.resolve('Auth_token');
  }
}
