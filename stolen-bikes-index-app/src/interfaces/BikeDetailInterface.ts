// Generated by https://quicktype.io

export interface BikeDetail {
  bike: BikeComplete;
}

export interface BikeComplete {
  dateStolen: number;
  description: string;
  frameColors: string[];
  frameModel: string;
  id: number;
  isStockImg: boolean;
  largeImg: string;
  locationFound: null;
  manufacturerName: string;
  externalId: null;
  registryName: null;
  registryUrl: null;
  serial: string;
  status: null;
  stolen: boolean;
  stolenLocation: string;
  thumb: string;
  title: string;
  url: string;
  year: number;
  registrationCreatedAt: number;
  registrationUpdatedAt: number;
  apiUrl: string;
  manufacturerId: number;
  paintDescription: null;
  name: string;
  frameSize: string;
  rearTireNarrow: boolean;
  frontTireNarrow: null;
  typeOfCycle: string;
  testBike: boolean;
  rearWheelSizeIsoBsd: null;
  frontWheelSizeIsoBsd: null;
  handlebarTypeSlug: string;
  frameMaterialSlug: null;
  frontGearTypeSlug: null;
  rearGearTypeSlug: null;
  additionalRegistration: string;
  stolenRecord: StolenRecord;
  publicImages: PublicImage[];
  components: Component[];
}

export interface Component {
  id: number;
  description: string;
  serialNumber: string;
  componentType: string;
  componentGroup: string;
  rear: null;
  front: null;
  manufacturerName: null | string;
  modelName: string;
  year: number | null;
}

export interface PublicImage {
  name: string;
  full: string;
  large: string;
  medium: string;
  thumb: string;
  id: number;
}

export interface StolenRecord {
  dateStolen: number;
  location: string;
  latitude: number;
  longitude: number;
  theftDescription: string;
  lockingDescription: string;
  lockDefeatDescription: string;
  policeReportNumber: string;
  policeReportDepartment: string;
  createdAt: number;
  createOpen311: boolean;
  id: number;
}
