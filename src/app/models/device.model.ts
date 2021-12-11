export interface Device {
  id: number;
  name: string;
  status: string;
  deviceIcon: string;
  temperature: number,
  relatedDevices: RelatedDevice[];
}

export interface RelatedDevice {
  id: number;
  name: string;
  status: string;
  deviceIcon: string;
  temperature: number,
  relatedDevices: RelatedDevice[];
}
