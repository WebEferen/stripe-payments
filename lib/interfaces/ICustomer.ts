import IMetadata from './IMetadata';

export default interface ICustomer {
  id: string;
  object: string;
  account_balance: number;
  created: number;
  currency: string;
  default_source: any;
  delinquent: boolean;
  description: string | null;
  discount: number | null;
  email: string | null;
  invoice_prefix: string;
  livemode: boolean;
  metadata: IMetadata;
  shipping: any;
  sources: {
    object: string;
    data: any[];
    has_more: boolean;
    total_count: number;
    url: string;
  };
  subscriptions: {
    object: string;
    data: any[];
    has_more: boolean;
    total_count: number;
    url: string;
  };
  tax_info: any;
  tax_info_verification: any;
}
