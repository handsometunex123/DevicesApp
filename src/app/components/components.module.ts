import { SectionLoaderComponent } from './utilities/section-loader/section-loader.component';
import { AppCommonModule } from './../common/app-common.module';

import { SearchBarComponent } from './core/search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceItemComponent } from './core/device-item/device-item.component';
import { DevicesListComponent } from './core/devices-list/devices-list.component';
import { EmptySectionTemplateComponent } from './utilities/empty-section-template/empty-section-template.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    DeviceItemComponent,
    DevicesListComponent,
    EmptySectionTemplateComponent,
    SectionLoaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    SearchBarComponent,
    DeviceItemComponent,
    DevicesListComponent,
    EmptySectionTemplateComponent,
    SectionLoaderComponent,
    PageNotFoundComponent
  ]
})
export class ComponentsModule { }
