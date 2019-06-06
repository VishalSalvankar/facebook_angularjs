import { Component, OnInit } from '@angular/core';
import { FacebookService, LoginResponse, InitParams } from 'ngx-facebook';

let initParams: InitParams = {
  appId: '439320223555612',
  xfbml: true,
  version: 'v2.8'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    this.fb.init(initParams);
  }
  title = 'social';

  constructor(private fb: FacebookService, ){
    
  }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
      console.log("Nt");
  }

  LogoutHere(): void{
    this.fb.logout()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }
}
