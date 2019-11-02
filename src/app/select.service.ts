import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SelectService {
  data: any;
  info: string;
  constructor() {}

  setContent(setData: any) {
    this.data = setData;
  }

  getContent() {
    return this.data;
  }

  setInfo(setText: string) {
    this.info = setText;
  }

  getInfo() {
    return this.info;
  }
}
