import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
// import { ProfileService} from 'selenium-webdriver/firefox';
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profile;
  repos;
  username: string;
  // profile:any
  // repos: any
  // username: any

  constructor(public profileService: ProfileService) {
  
      // this.profileService.updateProfile(this.username);

}


    findProfile(){
      this.profileService.updateProfile(this.username);
      this.profileService.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      })

        this.profileService.getProfileRepos().subscribe(repos => {
     console.log(this.repos);
      this.repos = repos;
      
  })
    }

  ngOnInit() {}
}

