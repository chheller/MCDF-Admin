import { authenticate, refresh } from './interface';
import { LiveAuthenticateGateway, LocalAuthenticateGateway } from './authenticate-gateway';

export interface LoginApi {
  authenticate(username: string, password: string): Promise<string>;
  refresh(): Promise<string>;
}

export class LiveLoginApi implements LoginApi {
  constructor(private authenticateGateway: LiveAuthenticateGateway) {}

  public async authenticate(username: string, password: string): Promise<string> {
    return authenticate(this.authenticateGateway, { username, password });
  }
  public async refresh(): Promise<string> {
    return refresh(this.authenticateGateway);
  }
}

export class LocalLoginApi implements LoginApi {
  constructor(private authenticateGateway: LocalAuthenticateGateway) {}
  public async authenticate(username: string, password: string): Promise<string> {
    return authenticate(this.authenticateGateway, { username, password });
  }
  public async refresh(): Promise<string> {
    return refresh(this.authenticateGateway);
  }
}
