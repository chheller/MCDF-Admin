import { ModData } from '../types';
import { LiveModsGateway, LocalModsGateway } from './mods-gateway';
import { fetchMods } from './interface';

export interface ModsApi {
  fetchMods: () => Promise<ModData[]>;
}

export class LiveModsApi implements ModsApi {
  constructor(private modsGateway: LiveModsGateway) {}
  public async fetchMods() {
    return await fetchMods(this.modsGateway);
  }
}

export class LocalModsApi implements ModsApi {
  constructor(private modsGateway: LocalModsGateway) {}
  public async fetchMods() {
    return await fetchMods(this.modsGateway);
  }
}
