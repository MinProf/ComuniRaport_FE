import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ComuniRaport';
  showHeader = false;
  showNavbar = false;
  ngOnInit() {
    if(localStorage.getItem('access_token') == null) {
      this.showHeader = true;
      this.showNavbar = false;
    } else this.showNavbar = true;

  }

}
