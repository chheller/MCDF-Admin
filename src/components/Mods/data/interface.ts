import { IRepository } from '../../../_shared/interfaces';
import { ModData } from '../types';

export const fetchMods = async (modsService: IRepository<void, ModData[]>) => {
  return await modsService.find();
};
