import IProduct from './IProduct';

export default interface IPlan {
  id?: string;
  object?: string;
  active?: boolean;
  aggregate_usage?: string | null;
  amount: number;
  currency: string;
  interval: string;
  product: IProduct | string;
  billing_scheme?: string;
  interval_count?: number;
  livemode?: boolean;
  metadata?: object;
  nickname?: string | null;
  tiers?: string | null;
  tiers_mode?: string | null;
  transform_usage?: string | null;
  trial_period_days?: number | null;
  usage_type?: string;
  updated?: number;
  created?: number;
}
