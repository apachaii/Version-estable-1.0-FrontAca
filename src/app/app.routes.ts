import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValoracionComponent } from './component/valoracion/valoracion.component';
import { PregFeqComponent } from './component/preg-feq/preg-feq.component';

const appRoutes: Routes = [
  { path: 'val', component: ValoracionComponent },
  { path: 'feq', component: PregFeqComponent },
  { path: '**', redirectTo: 'val',pathMatch: 'full' },
];


export const appRoutingProviders: any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);