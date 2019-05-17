import { IRepository } from '../../../_shared/interfaces';
import { AxiosInstance } from 'axios';
import { ModData } from '../types';

export class LiveModsGateway implements IRepository<void, ModData[]> {
  constructor(private api: AxiosInstance) {}

  public async find() {
    return (await this.api.get<ModData[]>('/mods')).data;
  }
}

export class LocalModsGateway implements IRepository<void, ModData[]> {
  constructor(private api: AxiosInstance) {}
  public async find() {
    return Promise.resolve(testData);
  }
}

const testData = [
  {
    name: 'Test Mod',
    path: 'mods/testmod-1.jar',
    disabled: false
  },
  {
    name: 'Test Mod 2',
    path: 'mods/testmod-2.jar',
    disabled: false
  },
  {
    name: 'Test Mod 3',
    path: 'disabled/testmod-3.jar',
    disabled: true
  },
  {
    name: 'Test Mod 4',
    path: 'disabled/testmod-4.jar',
    disabled: true
  }
];
