import { Component, OnInit } from "@angular/core";
import { SelectService } from "../select.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor(private selectservice: SelectService) {}

  ngOnInit() {}

  getBook() {
    return this.selectservice.getContent();
  }

  sendChapterInfo(receivedInfo) {
    this.selectservice.setInfo(receivedInfo);
  }
}
