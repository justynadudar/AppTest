import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
  {
    path: 'remove',
    component: RemoveUserComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    RemoveUserComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
