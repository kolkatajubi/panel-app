import { Component, OnInit } from "@angular/core";
import { SelectService } from "../select.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  constructor(private selectservice: SelectService) {}

  ngOnInit() {}

  getChapterInfo() {
    return this.selectservice.getInfo();
  }
}
