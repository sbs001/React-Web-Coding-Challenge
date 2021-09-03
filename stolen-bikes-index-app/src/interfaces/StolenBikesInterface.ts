// Generated by https://quicktype.io

export interface StolenBikes {
  bikes: Bike[];
}

export interface Bike {
  dateStolen: number;
  description: null | string;
  frameColors: string[];
  frameModel: null | string;
  id: number;
  isStockImg: boolean;
  largeImg: null | string;
  locationFound: null;
  manufacturerName: string;
  externalId: null;
  registryName: null;
  registryUrl: null;
  serial: string;
  status: null;
  stolen: boolean;
  stolenLocation: string;
  thumb: null | string;
  title: string;
  url: string;
  year: number | null;
}
