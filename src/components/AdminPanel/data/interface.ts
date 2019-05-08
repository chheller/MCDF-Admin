import { ModData } from '../types';

export interface ModsService {
  enable(mod: ModData): Promise<boolean>;
  disable(mod: ModData): Promise<boolean>;
  fetch(mod: ModData): Promise<ModData>;
  fetchAll(): Promise<ModData[]>;
}

export interface AdminService {
  restart(): Promise<void>;
}

export const fetchMods = async (modsService: ModsService) => {
  return await modsService.fetchAll();
};

export const restartServer = async (adminService: AdminService) => {
  return await adminService.restart();
};

export const enableMod = async (modService: ModsService, mod: ModData) => {
  return await modService.enable(mod);
};
export const disableMod = async (modService: ModsService, mod: ModData) => {
  return await modService.disable(mod);
};

export const fetchMod = async (modService: ModsService, mod: ModData) => {
  return await modService.fetch(mod);
};
