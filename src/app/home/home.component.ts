import { Component, OnInit } from "@angular/core";
import { SelectService } from "../select.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  book: object[] = [
    { title: "Chapter 1", info: "This is chapter 1 information" },
    { title: "Chapter 2", info: "This is chapter 2 information" },
    { title: "Chapter 3", info: "This is chapter 3 information" },
    { title: "Chapter 4", info: "This is chapter 4 information" },
    { title: "Chapter 5", info: "This is chapter 5 information" },
    { title: "Chapter 6", info: "This is chapter 6 information" },
    { title: "Chapter 7", info: "This is chapter 7 information" },
    { title: "Chapter 8", info: "This is chapter 8 information" },
    { title: "Chapter 9", info: "This is chapter 9 information" },
    { title: "Chapter 10", info: "This is chapter 10 information" }
  ];
  constructor(private selectservice: SelectService) {}

  ngOnInit() {
    this.sendBook();
  }

  sendBook() {
    this.selectservice.setContent(this.book);
  }
}
