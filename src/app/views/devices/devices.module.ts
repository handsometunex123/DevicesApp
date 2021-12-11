import { ComponentsModule } from './../../components/components.module';
import { AppCommonModule } from './../../common/app-common.module';
import { MaterialUiModule } from './../../common/material-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';


@NgModule({
  declarations: [
    DevicesComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MaterialUiModule,
    AppCommonModule,
    ComponentsModule,
  ]
})
export class DevicesModule { }
