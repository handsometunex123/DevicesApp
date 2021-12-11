import { DeviceDetailModule } from './device-detail/device-detail.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DevicesComponent } from './devices.component';

export const DEVICE_ROUTES: Routes = [
  {
    path: '',
    component: DevicesComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./device-detail/device-detail.module').then(
        (m) => m.DeviceDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(DEVICE_ROUTES)],
  exports: [RouterModule],
})
export class DevicesRoutingModule {}
