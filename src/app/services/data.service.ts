import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LoginData } from "../models/login-data.model";

@Injectable()
export class DataService {
  public submitForm = new Subject<LoginData>();
}
