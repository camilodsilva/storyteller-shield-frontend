import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ClansComponent } from "./clans/clans.component";
import { PageBodyComponent } from "./page-body/page-body.component";

const routes: Routes = [
  { path: "", component: PageBodyComponent },
  { path: "clans", component: ClansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
