export default interface ICard {
  id?: string;
  object?: string;
  name?: string;
  address_city?: string | null;
  address_country?: string | null;
  address_line1?: string | null;
  address_line1_check?: string | null;
  address_line2?: string | null;
  address_state?: string | null;
  address_zip?: string | null;
  address_zip_check?: string | null;
  brand?: string;
  country?: string;
  customer?: string;
  cvc_check?: string | null;
  dynamic_last4?: string | null;
  exp_month?: number;
  exp_year?: number;
  fingerprint?: string;
  funding?: string;
  last4?: string;
  metadata?: object;
  tokenization_method?: string | null;
}
