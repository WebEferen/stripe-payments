import IMetadata from './IMetadata';
import ISubscription from './ISubscription';

export default interface ICustomer {
  id?: string;
  email?: string | null;
  description?: string | null;
  source: string;
  currency?: string;
  metadata?: IMetadata;
  subscriptions?: {
    data: ISubscription[];
  };
}
