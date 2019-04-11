import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FormComponent } from "./components/form/form.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";

import { DataService } from "./services/data.service";

@NgModule({
  declarations: [AppComponent, FormComponent, SpinnerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
