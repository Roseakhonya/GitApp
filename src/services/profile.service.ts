import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = '590ca21303ca9f83ec89';
  private clientsecret = 'c5b9c57a1e6f32a7b3d5a3095ab844ec03331e61';

  constructor(private http :HttpClient) {
    console.log("service is ready!!");
    this.username = "Roseakhonya";

   }
   getProfileInfo() {
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + 
     this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map(res=>res));
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + 
    this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res=>res));
   }
   updateProfile(username:string){
    this.username = username;
   }
}