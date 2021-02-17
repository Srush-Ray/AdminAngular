import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applinks',
  templateUrl: './applinks.component.html',
  styleUrls: ['./applinks.component.css']
})
export class ApplinksComponent implements OnInit {
  dataList = [
    {
      server: "10.20.2.218",
      port: "3660",
      tenant: "852",
      callbackinfo: "798654",
      helpdesk:""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
