export interface IRepository<Params, Data> {
  find(params: Params): Promise<Data>;
}
