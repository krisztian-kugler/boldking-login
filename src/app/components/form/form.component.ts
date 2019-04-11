import { Component } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";
import { validate } from "../../api/api";
import { DataService } from "src/app/services/data.service";
import { LoginData } from "src/app/models/login-data.model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.sass"]
})
export class FormComponent {
  constructor(private dataService: DataService) {}

  public passwordPattern: RegExp = /\d/;

  public networkError: boolean = false;

  public validating: boolean = false;

  public username = {
    valid: <boolean>false,
    validationResponse: <string | Error>"User name can't be empty"
  };

  private debouncer;

  public onUsernameInput(input: FormControl): void {
    clearTimeout(this.debouncer);
    this.debouncer = setTimeout(() => {
      this.validating = true;
      validate(input.value)
        .then(this.validationSuccess.bind(this))
        .catch(this.validationError.bind(this));
    }, 500);
  }

  private validationSuccess(): void {
    this.validating = false;
    this.networkError = false;
    this.username.valid = true;
    this.username.validationResponse = "Username is valid";
  }

  private validationError(error: Error): void {
    this.validating = false;
    this.username.valid = false;
    if (error.message.includes("Network error")) {
      this.networkError = true;
      this.username.validationResponse = `${error.message}, validation failed. Try again later`;
    } else {
      this.networkError = false;
      this.username.validationResponse = error.message;
    }
  }

  public onSubmit(form: NgForm): void {
    const loginData: LoginData = form.value;
    this.dataService.submitForm.next(loginData);
  }
}
