export default interface IListOption {
  limit?: number;
  email?: string;
  ending_before?: string;
  starting_after?: string;
  created?: number | {gt?: number, gte?: number, lt?: number, lte?: number};
}
