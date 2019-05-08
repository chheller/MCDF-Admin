export interface Repository<Params, Data> {
  find(params: Params): Promise<Data>;
}
export interface Command<Params> {
  execute(params: Params): Promise<void>;
}
