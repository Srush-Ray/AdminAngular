import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometabs',
  templateUrl: './hometabs.component.html',
  styleUrls: ['./hometabs.component.css']
})
export class HometabsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  tabsList = [
    {
      id: "1",
      image: "../../assets/tabs/home.png",
      caption:"Home",
    },
    {
      id: "2",
      image: "../../assets/tabs/home.png",
      caption:"Attendance",
    },
    {
      id: "3",
      image: "../../assets/tabs/home.png",
      caption:"Information",
    },
    {
      id: "4",
      image: "../../assets/tabs/home.png",
      caption:"News",
    },
    {
      id: "5",
      image: "../../assets/tabs/home.png",
      caption:"Salary",
    }
  ]
  get getTabsList() {
    return Object.keys(this.tabsList);
  }

}
