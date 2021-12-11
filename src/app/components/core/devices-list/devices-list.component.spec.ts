import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceData } from 'src/app/views/devices/devices-data';

import { DevicesListComponent } from './devices-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { By } from '@angular/platform-browser';
import { Device } from 'src/app/models/device.model';
import { DebugElement } from '@angular/core';

describe('DevicesListComponent', () => {
  let component: DevicesListComponent;
  let fixture: ComponentFixture<DevicesListComponent>;
  let applicationElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DevicesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesListComponent);
    component = fixture.componentInstance;
    //pass a mock data into the deviceList Input
    component.devicesList = DeviceData.devices;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`Test that all the elements rendered on the homepage`, (done) => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        //check that all the items rendered on the page
        var elementArray = fixture.debugElement.queryAll(By.css('.each-item'));
        expect(elementArray.length).toEqual(4);
        done();
      })  
  });
});
