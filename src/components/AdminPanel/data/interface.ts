import { Repository } from '../../../_shared/interfaces';
import { ModData } from '../types';

export const fetchMods = async (modsService: Repository<void, ModData[]>) => {
  return await modsService.find();
};
