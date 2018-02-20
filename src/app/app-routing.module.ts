import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent }   from './menu/menu.component';
import { SimpletextboxComponent }   from './simpletextbox/simpletextbox.component';
import { PasswordboxComponent }   from './passwordbox/passwordbox.component';
import { OnlynumberboxComponent }   from './onlynumberbox/onlynumberbox.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'simpletextbox', component: SimpletextboxComponent },
  { path: 'passwordbox', component: PasswordboxComponent },
  { path: 'onlynumbers', component: OnlynumberboxComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}