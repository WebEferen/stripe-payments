import IPlan from './IPlan';

export default interface ISubscriptionItem {
  id?: string;
  object?: string;
  subscription: string;
  plan: IPlan | string;
  quantity: number;
  metadata?: object;
  updated?: number;
  created?: number;
}
