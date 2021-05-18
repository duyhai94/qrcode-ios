import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeConfirmPage } from './home-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: HomeConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeConfirmPageRoutingModule {}
