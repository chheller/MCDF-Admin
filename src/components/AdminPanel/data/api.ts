import { ModData, ServerStatus } from '../types';
import { LiveAdministrationGateway, LocalAdministrationGateway } from './admin-gateway';
import { LiveModsGateway, LocalModsGateway } from './mods-gateway';
import { fetchMods, disableMod, enableMod, fetchMod } from './interface';

export interface AdministrationApi {
  fetchMod: (mod: ModData) => Promise<ModData>;
  fetchMods: () => Promise<ModData[]>;
  restartServer: () => Promise<void>;
  disableMod: (mod: ModData) => Promise<boolean>;
  enableMod: (mod: ModData) => Promise<boolean>;
  getServerStatus: () => Promise<ServerStatus>;
}

export class LiveAdministrationApi implements AdministrationApi {
  constructor(
    private modsGateway: LiveModsGateway,
    private adminGateway: LiveAdministrationGateway
  ) {}
  public async fetchMods() {
    return await fetchMods(this.modsGateway);
  }
  public async fetchMod(mod: ModData) {
    return await fetchMod(this.modsGateway, mod);
  }
  public async disableMod(mod: ModData) {
    return await disableMod(this.modsGateway, mod);
  }
  public async enableMod(mod: ModData) {
    return await enableMod(this.modsGateway, mod);
  }
  public async restartServer() {
    return await this.adminGateway.restart();
  }
  public async getServerStatus() {
    return await this.adminGateway.getServerStatus();
  }
}

export class LocalAdministrationApi implements AdministrationApi {
  constructor(
    private modsGateway: LocalModsGateway,
    private adminGateway: LocalAdministrationGateway
  ) {}
  public async fetchMods() {
    return await fetchMods(this.modsGateway);
  }
  public async fetchMod(mod: ModData) {
    return await fetchMod(this.modsGateway, mod);
  }
  public async disableMod(mod: ModData) {
    return await disableMod(this.modsGateway, mod);
  }
  public async enableMod(mod: ModData) {
    return await enableMod(this.modsGateway, mod);
  }
  public async restartServer() {
    return await this.adminGateway.restart();
  }
  public async getServerStatus() {
    return await this.adminGateway.getServerStatus();
  }
}
