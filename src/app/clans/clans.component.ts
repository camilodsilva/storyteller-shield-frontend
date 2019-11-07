import { Component, OnInit } from "@angular/core";

import { ClansInterface } from "./ClansInterface";

const CLANS_DATA: ClansInterface[] = [
  { name: "Brujah", image: "/assets/clans/brujah.png" },
  { name: "Gangrel", image: "/assets/clans/gangrel.png" },
  { name: "Malkaviano", image: "/assets/clans/malkavian.png" },
  { name: "Nosferatu", image: "/assets/clans/nosferatu.png" },
  { name: "Toreador", image: "/assets/clans/toreador.png" },
  { name: "Tremere", image: "/assets/clans/tremere.png" },
  { name: "Ventrue", image: "/assets/clans/ventrue.png" }
];

@Component({
  selector: "app-clans",
  templateUrl: "./clans.component.html",
  styleUrls: ["./clans.component.css"]
})
export class ClansComponent implements OnInit {
  private clans;

  constructor() {
    this.clans = CLANS_DATA;
  }

  ngOnInit() {}
}
