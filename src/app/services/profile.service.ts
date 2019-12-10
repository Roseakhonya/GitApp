import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  username: string;
  clientid = "28a3e78163de73e48fcb";
  clientsecret = "b3ddc4e3c2043edcfa39bc1f2b9dabf73ed8288b";

  constructor(private http: HttpClient) {
    console.log("service is ready!!");
    this.username = "Roseakhonya";
  }
  getProfileInfo() {
    return this.http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "?client_id=" +
          this.clientid +
          "&client_secret=" +
          this.clientsecret
      )
      .pipe(map(res => res));
  }
  getProfileRepos() {
    return this.http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "/repos?client_id" +
          this.clientid +
          "&client_secret=" +
          this.clientsecret
      )
      .pipe(map(res => res));
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
