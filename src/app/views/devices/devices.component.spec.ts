// import { DevicesService } from 'src/app/services/devices/devices.service';
// import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
// import { DeviceData } from './devices-data';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { DevicesComponent } from './devices.component';
// import { async, of } from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';
// import { Device } from 'src/app/models/device.model';

// describe('DevicesComponent', () => {
//   let component: DevicesComponent;
//   let fixture: ComponentFixture<DevicesComponent>;

//   let deviceService: any;
//   beforeEach(async () => {
//     // appState = jasmine.createSpy('AppStateService');
//     // appState.store$ = jasmine.createSpy('store$').and.returnValue(of<Store>({} as Store));

//     deviceService = jasmine.createSpy('DevicesService');

//     deviceService.deviceWithSearchAction$ = jasmine
//       .createSpy('deviceWithSearchAction$')
//       .and.returnValue(of<Device[]>([] as Device[]));
//     // deviceService = jasmine.createSpyObj('DevicesService', ['devices$']);
//     // deviceService.returnValue(of('mock value as requires'))
//     await TestBed.configureTestingModule({
//       providers: [
//         {
//           provide: DevicesService,
//           useClass: deviceService,
//         },
//       ],
//       imports: [HttpClientTestingModule],
//       declarations: [DevicesComponent],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DevicesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should log device service', () => {
//     console.log('SHOW DEVICES', deviceService.deviceWithSearchAction$);
//     // deviceService.deviceWithSearchAction$.pipe((value: any[]) => {
//     //   expect(value.length).toBeGreaterThan(0);
//     //   done();
//     // });
//     // expect(deviceService.deviceWithSearchAction$.subscribe(value => ))
//     // expect(deviceService).toBeTruthy();
//   });
// });
