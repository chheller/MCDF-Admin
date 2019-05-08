import { ModData } from '../types';
import { LiveAdministrationGateway, LocalAdministrationGateway } from './mods-gateway';
import { fetchMods } from './interface';

export interface AdministrationApi {
  fetchMods: () => Promise<ModData[]>;
}

export class LiveAdministrationApi implements AdministrationApi {
  constructor(private modsGateway: LiveAdministrationGateway) {}
  public async fetchMods() {
    return await fetchMods(this.modsGateway);
  }
}

export class LocalAdministrationApi implements AdministrationApi {
  constructor(private modsGateway: LocalAdministrationGateway) {}
  public async fetchMods() {
    return await fetchMods(this.modsGateway);
  }
}
