import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SideloadComponent} from './sideload/sideload.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexModule} from "@angular/flex-layout";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'marketplace', component: MarketplaceComponent},
  {path: 'sideload', component: SideloadComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SideloadComponent,
    DashboardComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FlexModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
