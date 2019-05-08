import { Repository } from '../../../_shared/interfaces';
import { AxiosInstance } from 'axios';
import { ModData } from '../types';
import { testData } from './mods-dummy-data';

export class LiveAdministrationGateway implements Repository<void, ModData[]> {
  constructor(private api: AxiosInstance) {}

  public async find() {
    return (await this.api.get<ModData[]>('/mods')).data;
  }
}

export class LocalAdministrationGateway implements Repository<void, ModData[]> {
  constructor(private api: AxiosInstance) {}
  public async find() {
    return Promise.resolve(testData);
  }
}
