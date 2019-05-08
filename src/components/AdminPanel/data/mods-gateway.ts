import { AxiosInstance, AxiosResponse } from 'axios';
import { ModData } from '../types';
import { testData } from './mods-dummy-data';
import { ModsService } from './interface';

export class LiveModsGateway implements ModsService {
  constructor(private api: AxiosInstance) {}

  public async fetchAll() {
    const response = await this.api.get<ModData[]>('/mods');
    return response.data;
  }
  public async fetch(mod: ModData) {
    const response = await this.api.get<ModData>(`/mods/${mod.modid}`);
    return response.data;
  }

  public async disable(mod: ModData) {
    const response = await this.api.post<boolean>(`/mods/disable`, mod);
    return !!response.data;
  }
  public async enable(mod: ModData) {
    const response = await this.api.post<boolean>(`/mods/enable`, mod);
    return !!response.data;
  }
}

export class LocalModsGateway implements ModsService {
  constructor(private api: AxiosInstance) {}

  public async fetchAll() {
    return testData;
  }
  public async fetch(mod: ModData) {
    return testData.find(testMod => testMod === mod) || ({} as ModData);
  }
  public async disable(mod: ModData) {
    return Promise.resolve(true);
  }
  public async enable(mod: ModData) {
    return Promise.resolve(true);
  }
}
