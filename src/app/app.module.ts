import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { ContentComponent } from "./content/content.component";
import { SelectService } from "./select.service";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, MenuComponent, ContentComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule {}
