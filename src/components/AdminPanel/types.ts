export type ModData = {
  name?: string;
  modid?: string;
  version?: string;
  description?: string;
  mcversion?: string;
  logoFile?: string;
  path: string;
  enabled: boolean;
};

export enum ServerStatus {
  online = 'ONLINE',
  offline = 'OFFLINE',
  restarting = 'RESTARTING',
  unknown = 'UNKNOWN'
}
