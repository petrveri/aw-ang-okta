import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OktaLoginRedirectComponent, OktaCallbackComponent, OktaAuthGuard, OKTA_CONFIG, OktaAuthModule }
  from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/okta/auth.interceptor';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'login', component: OktaLoginRedirectComponent },
  { path: 'customers', component: CustomersListComponent, canActivate: [ OktaAuthGuard ] },
  { path: 'settings', component: SettingsComponent, canActivate: [ OktaAuthGuard ] }
];

const oktaConfig = {
  issuer: 'https://dev-377283.okta.com/oauth2/default',
  clientId: '0oae5ys5hkHfHsIgh4x6',
  redirectUri: 'http://localhost:4200/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
}

@NgModule({
  imports: [RouterModule.forRoot(routes),
            OktaAuthModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
            { provide: OKTA_CONFIG, useValue: oktaConfig }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
