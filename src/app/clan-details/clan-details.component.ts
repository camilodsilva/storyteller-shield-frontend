import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IClans } from "../models/IClans";
import { CLANS_DATA } from "../repositories/ClansRepository";

@Component({
  selector: "app-clan-details",
  templateUrl: "./clan-details.component.html",
  styleUrls: ["./clan-details.component.css"]
})
export class ClanDetailsComponent implements OnInit {
  private clanName: string;
  private clan: IClans;
  private disciplines: string[];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      this.clanName = param.get("clan");

      CLANS_DATA.map(clan => {
        if (clan.name === this.clanName) {
          this.clan = clan;
        }
      });
    });
  }

  ngOnInit() {}
}
