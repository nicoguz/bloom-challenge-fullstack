import { BrandSettings } from "./brand-setting";

export type Brand = {
  id: string;
  name: string;
  url: string;
  img: string;
  settings?: BrandSettings;
};

export type Brands = Brand[];
