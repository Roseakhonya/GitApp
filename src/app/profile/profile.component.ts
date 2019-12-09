import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/services/profile.service';
// import { ProfileService} from 'selenium-webdriver/firefox';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile: "";
  private repos:"";
  private username: "string";

  constructor(private profileService: ProfileService) { 
  }
    findProfile(){
      this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile;
    });
    
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(this.repos);
      this.repos;
    });
  }

  ngOnInit() {
  }

}
