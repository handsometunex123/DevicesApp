import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DeviceData } from './views/devices/devices-data';



export class AppData implements InMemoryDbService {

  createDb() {
    const devices = DeviceData.devices;
    return { devices };
  }
}
