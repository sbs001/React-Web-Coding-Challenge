/* eslint-disable camelcase */
// Generated by https://quicktype.io

export interface BikeDetail {
  bike: BikeComplete;
}

export interface BikeComplete {
  date_stolen: number;
  description: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: string;
  location_found: null;
  manufacturer_name: string;
  external_id: null;
  registry_name: null;
  registry_url: null;
  serial: string;
  status: null;
  stolen: boolean;
  stolen_location: string;
  thumb: string;
  title: string;
  url: string;
  year: number;
  registration_created_at: number;
  registration_updated_at: number;
  api_url: string;
  manufacturer_id: number;
  paint_description: null;
  name: string;
  frame_size: string;
  rearTire_narrow: boolean;
  frontTire_narrow: null;
  type_of_cycle: string;
  test_bike: boolean;
  rear_wheel_size_isoBsd: null;
  front_wheel_size_isoBsd: null;
  handlebar_type_slug: string;
  frame_material_slug: null;
  front_gear_type_slug: null;
  rear_gear_type_slug: null;
  additional_registration: string;
  stolen_record: StolenRecord;
  public_images: PublicImage[];
  components: Component[];
}

export interface Component {
  id: number;
  description: string;
  serial_number: string;
  component_type: string;
  component_group: string;
  rear: null;
  front: null;
  manufacturer_name: null | string;
  model_name: string;
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
  date_stolen: number;
  location: string;
  latitude: number;
  longitude: number;
  theft_description: string;
  locking_description: string;
  lock_defeat_description: string;
  police_report_number: string;
  police_report_department: string;
  created_at: number;
  createO_open311: boolean;
  id: number;
}
