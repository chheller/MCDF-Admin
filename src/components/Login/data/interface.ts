export interface AuthenticateStruct {
  username: string;
  password: string;
}

export interface AuthenticationService {
  refresh: () => Promise<string>;
  authenticate: (details: AuthenticateStruct) => Promise<string>;
}

export const authenticate = async (
  authenticateService: AuthenticationService,
  details: AuthenticateStruct
): Promise<string> => {
  return await authenticateService.authenticate(details);
};

export const refresh = async (authenticateService: AuthenticationService): Promise<string> => {
  return await authenticateService.refresh();
};
