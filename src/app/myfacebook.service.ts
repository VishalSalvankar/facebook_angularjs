import { Injectable, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

let initParams: InitParams = {
  appId: '439320223555612',
  xfbml: true,
  version: 'v3.3'
};


@Injectable({
  providedIn: 'root'
})

export class MyfacebookService implements OnInit{
  ngOnInit() {
    //this.fb.init(initParams);
  }

  constructor(private fb: FacebookService) {     
  }


}
