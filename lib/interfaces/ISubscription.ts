import IPlan from './IPlan';

export default interface ISubscription {
  id?: string;
  customer: string;
  billing?: string;
  canceled_at?: number | null;
  current_period_end?: number;
  current_period_start?: number;
  days_until_due?: number | null;
  discount?: string | null;
  ended_at?: number | null;
  items: [{plan: string}] | any;
  plan?: IPlan;
  quantity: number;
  start?: number;
  status?: string;
  tax_percent?: number | null;
  trial_start?: number | null;
  trial_end?: number | null;
}
