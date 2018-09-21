export default interface IProduct {
  id?: string;
  object?: string;
  name: string;
  type: string;
  active?: boolean;
  attributes?: string[];
  caption?: string | null;
  deactivate_on?: string[];
  description?: string;
  images?: string[];
  livemode?: boolean;
  metadata?: object;
  package_dimensions?: string | null;
  shippable?: boolean;
  url?: string | null;
  created?: number;
  updated?: number;
}
