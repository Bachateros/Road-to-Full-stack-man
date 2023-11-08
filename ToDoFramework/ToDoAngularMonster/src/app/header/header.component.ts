import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  time: Date = new Date();

  startTime(): void {
    setTimeout(() => {
      this.time = new Date();
      this.startTime();
    }, 1000);
  }

  ngOnInit(): void {
    this.startTime();
  }
}
