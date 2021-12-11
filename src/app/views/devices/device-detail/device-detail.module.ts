import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceDetailRoutingModule } from './device-detail-routing.module';
import { DeviceDetailComponent } from './device-detail.component';


@NgModule({
  declarations: [
    DeviceDetailComponent
  ],
  imports: [
    CommonModule,
    DeviceDetailRoutingModule,
    ComponentsModule
  ]
})
export class DeviceDetailModule { }
