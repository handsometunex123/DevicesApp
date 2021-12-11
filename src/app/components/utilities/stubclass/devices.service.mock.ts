import { Observable, of } from 'rxjs';
import { Device } from 'src/app/models/device.model';

export class DevicesServiceStub {
  deviceWithSearchAction$: Observable<Device[]> = of([
    {
      id: 1,
      name: 'Device 1',
      status: 'available',
      deviceIcon: 'phone_iphone',
      temperature: 10,
      relatedDevices: [
        {
          id: 2,
          name: 'Device 2',
          status: 'offline',
          deviceIcon: 'phone_iphone',
          temperature: 10,
          relatedDevices: [],
        },
        {
          id: 3,
          name: 'Device 3',
          status: 'available',
          deviceIcon: 'phone',
          temperature: 10,
          relatedDevices: [],
        },
        {
          id: 4,
          name: 'Device 4',
          status: 'available',
          deviceIcon: 'phone_android',
          temperature: 10,
          relatedDevices: [],
        },
        {
          id: 5,
          name: 'Device 5',
          status: 'offline',
          deviceIcon: 'phonelink',
          temperature: 10,
          relatedDevices: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Device 2',
      status: 'offline',
      deviceIcon: 'phone_iphone',
      temperature: 14,
      relatedDevices: [
        {
          id: 1,
          name: 'Device 1',
          status: 'offline',
          deviceIcon: 'phone_iphone',
          temperature: 10,
          relatedDevices: [],
        },
        {
          id: 3,
          name: 'Device 3',
          status: 'available',
          deviceIcon: 'phone',
          temperature: 10,
          relatedDevices: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Device 3',
      status: 'available',
      deviceIcon: 'phone_android',
      temperature: 10,
      relatedDevices: [
        {
          id: 4,
          name: 'Device 4',
          status: 'available',
          deviceIcon: 'phone_android',
          temperature: 15,
          relatedDevices: [],
        },
      ],
    },
    {
      id: 4,
      name: 'Device 4',
      status: 'offline',
      deviceIcon: 'phonelink',
      temperature: 15,
      relatedDevices: [],
    },
  ]);
}
