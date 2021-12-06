import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'investability';

  menuItems = [
    {
      name: 'Dashboard',
      route: 'dashboard'
    },
    {
      name: 'Marketplace',
      route: 'marketplace'
    },
    {
      name: 'Sideload',
      route: 'sideload'
    },
    {
      name: 'Settings',
      route: 'settings'
    }
  ];

}
