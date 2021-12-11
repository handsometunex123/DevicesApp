import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { MaterialUiModule } from 'src/app/common/material-ui.module';
import { AppCommonModule } from 'src/app/common/app-common.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PortalComponent } from './portal.component';


@NgModule({
  declarations: [
    PortalComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    MaterialUiModule,
    AppCommonModule,
    ComponentsModule,
  ]
})
export class PortalModule { }
