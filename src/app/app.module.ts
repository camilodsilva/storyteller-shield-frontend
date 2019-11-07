import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";

import { HomeComponent } from "./home/home.component";
import { ClansComponent } from "./clans/clans.component";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { PageBodyComponent } from "./page-body/page-body.component";
import { ClanDetailsComponent } from "./clan-details/clan-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClansComponent,
    PageHeaderComponent,
    PageBodyComponent,
    ClanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
