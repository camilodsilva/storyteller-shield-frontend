import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IDisciplines } from "../models/IDisciplines";
import { DISCIPLINES_DATA } from "../repositories/DisciplinesRepository";

@Component({
  selector: "app-disciplines",
  templateUrl: "./disciplines.component.html",
  styleUrls: ["./disciplines.component.css"]
})
export class DisciplinesComponent implements OnInit {
  private fragment: string;
  private disciplines: IDisciplines[];
  private levelsAvailable: number[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => (this.fragment = fragment));
    this.disciplines = DISCIPLINES_DATA;
    this.levelsAvailable = [1, 2, 3, 4, 5];
  }

  ngAfterViewInit(): void {
    try {
      window.document.querySelector(`#${this.fragment}`).scrollIntoView();
      window.scroll(0, window.scrollY - 70);
    } catch (err) {}
  }
}
