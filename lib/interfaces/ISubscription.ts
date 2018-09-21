import IPlan from './IPlan';

export default interface ISubscription {
  id?: string;
  object?: string;
  customer: string;
  application_fee_percent?: number | null;
  billing?: string;
  billing_cycle_anchor?: number;
  cancel_at_period_end?: boolean;
  canceled_at?: number | null;
  created?: number;
  current_period_end?: number;
  current_period_start?: number;
  days_until_due?: number | null;
  discount?: string | null;
  ended_at?: number | null;
  items: [{plan: string}] | any;
  plan?: IPlan;
  livemode?: boolean;
  metadata?: object;
  quantity: number;
  start?: number;
  status?: string;
  tax_percent?: number | null;
  trial_start?: number | null;
  trial_end?: number | null;
}
