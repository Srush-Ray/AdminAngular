import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  noticeList = [
    {
      id: "741258963",
      notice: "Covid norms",

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
