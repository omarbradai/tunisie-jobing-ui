import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {UiComponentsModule} from "../ui-components/ui-component.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
    imports: [
      CommonModule,
      UiComponentsModule,
      FlexLayoutModule,
      BrowserModule,
      AppRoutingModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
    declarations: [
      HeaderComponent,
      FooterComponent,
      SideNavComponent,
      DashboardComponent
    ]
})
export class TjComponentsModule { }
