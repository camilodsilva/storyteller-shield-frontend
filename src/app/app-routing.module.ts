import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ClansComponent } from "./clans/clans.component";
import { ClanDetailsComponent } from "./clan-details/clan-details.component";
import { DisciplinesComponent } from "./disciplines/disciplines.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "clans", component: ClansComponent },
  { path: "clanDetails/:clan", component: ClanDetailsComponent },
  { path: "disciplines", component: DisciplinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
