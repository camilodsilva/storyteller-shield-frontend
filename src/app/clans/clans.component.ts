import { Component, OnInit } from "@angular/core";

import { CLANS_DATA } from "../repositories/ClansRepository";

@Component({
  selector: "app-clans",
  templateUrl: "./clans.component.html",
  styleUrls: ["./clans.component.css"]
})
export class ClansComponent implements OnInit {
  clans;

  constructor() {
    this.clans = CLANS_DATA;
  }

  ngOnInit() {}
}
