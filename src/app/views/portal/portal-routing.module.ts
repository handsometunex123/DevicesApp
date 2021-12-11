import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

export const PORTAL_ROUTES: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: '', redirectTo: '/portal/devices', pathMatch: 'full' },
      {
        path: 'devices',
        loadChildren: () => import('../devices/devices.module').then(m => m.DevicesModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(PORTAL_ROUTES)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
