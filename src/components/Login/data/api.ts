import { LiveLoginGateway, LocalLoginGateway } from './login-gateway';
import { authenticate, refresh } from './interface';
import { LiveAuthenticateGateway, LocalAuthenticateGateway } from './authenticate-gateway';

export interface LoginApi {
  authenticate(username: string, password: string): Promise<string>;
  refresh(): Promise<string>;
}

export class LiveLoginApi implements LoginApi {
  constructor(
    private loginGateway: LiveLoginGateway,
    private authenticateGateway: LiveAuthenticateGateway
  ) {}

  public async authenticate(username: string, password: string): Promise<string> {
    return authenticate({ username, password }, this.loginGateway);
  }
  public async refresh(): Promise<string> {
    return refresh(this.authenticateGateway);
  }
}

export class LocalLoginApi implements LoginApi {
  constructor(
    private loginGateway: LocalLoginGateway,
    private authenticateGateway: LocalAuthenticateGateway
  ) {}
  public async authenticate(username: string, password: string): Promise<string> {
    return authenticate({ username, password }, this.loginGateway);
  }
  public async refresh(): Promise<string> {
    return refresh(this.authenticateGateway);
  }
}
