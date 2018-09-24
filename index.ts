import Payments from './lib/Payments';

export function payments(stripeToken: string) {
  return new Payments(stripeToken);
};