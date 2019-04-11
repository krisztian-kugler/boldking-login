import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { submit } from "./api/api";
import { DataService } from "./services/data.service";
import { LoginData } from "./models/login-data.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService) {}

  public launched: boolean = false;

  public loading: boolean = false;

  public loginSuccessful: boolean;

  public title: string;

  public content: LoginData | string;

  private submitFormSubscription: Subscription;

  private loginSuccess(loginData: LoginData): void {
    this.title = "Login successful";
    this.content = loginData;
    this.loading = false;
    this.loginSuccessful = true;
  }

  private loginError(error: Error): void {
    this.title = "Login failed";
    this.content = error.message;
    this.loading = false;
    this.loginSuccessful = false;
  }

  ngOnInit() {
    this.submitFormSubscription = this.dataService.submitForm.subscribe((loginData: LoginData) => {
      this.launched = true;
      this.loading = true;
      submit(loginData)
        .then(this.loginSuccess.bind(this))
        .catch(this.loginError.bind(this));
    });
  }

  ngOnDestroy() {
    this.submitFormSubscription.unsubscribe();
  }
}
