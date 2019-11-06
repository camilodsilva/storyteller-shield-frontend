import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clans",
  templateUrl: "./clans.component.html",
  styleUrls: ["./clans.component.css"]
})
export class ClansComponent implements OnInit {
  private clans;
  private dataSource;
  private displayedColumns: string[];
  constructor() {
    this.clans = [
      { title: "Brujah", subTitle: "Sobre o clã" },
      { title: "Gangrel", subTitle: "this is a subtitle" },
      { title: "Malkaviano", subTitle: "this is a subtitle" },
      { title: "Nosferatu", subTitle: "this is a subtitle" },
      { title: "Toreador", subTitle: "this is a subtitle" },
      { title: "Tremere", subTitle: "this is a subtitle" },
      { title: "Ventrue", subTitle: "this is a subtitle" }
    ];
    this.displayedColumns = [
      "firstDiscipline",
      "secondDiscipline",
      "thirdDiscipline"
    ];
    this.dataSource = [
      {
        firstDiscipline: "Potência",
        secondDiscipline: "Rapidez",
        thirdDiscipline: "Presença"
      }
    ];
  }

  ngOnInit() {}
}
