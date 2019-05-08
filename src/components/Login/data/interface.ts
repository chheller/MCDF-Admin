import { Repository } from '../../../_shared/interfaces';

export interface AuthenticateStruct {
  username: string;
  password: string;
}

export const authenticate = async (
  details: AuthenticateStruct,
  loginService: Repository<AuthenticateStruct, string>
): Promise<string> => {
  return await loginService.find(details);
};

export const refresh = async (authenticateService: Repository<void, string>): Promise<string> => {
  return await authenticateService.find();
};
