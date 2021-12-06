import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  apps: any;

  constructor() {
  }

  ngOnInit(): void {

    this.apps = [
      {
        title: 'Angular',
        subtitle: 'Angular is a platform that makes it easy to build applications with the web.',
      }, {
        title: 'Angular Material',
        subtitle: 'The Angular Material library is a set of components and directives for building a complete user interface with Material Design.',
      }, {
        title: 'Angular Material',
        subtitle: 'The Angular Material library is a set of components and directives for building a complete user interface with Material Design.',
      }, {
        title: 'Angular Material',
        subtitle: 'The Angular Material library is a set of components and directives for building a complete user interface with Material Design.',
      }, {
        title: 'Angular Material',
        subtitle: 'The Angular Material library is a set of components and directives for building a complete user interface with Material Design.',
      }, {
        title: 'Angular Material',
        subtitle: 'The Angular Material library is a set of components and directives for building a complete user interface with Material Design.',
      }, {
        title: 'Angular Material',
        subtitle: 'The Angular Material library is a set of components and directives for building a complete user interface with Material Design.',
      }, {
        title: 'Angular Material',
        subtitle: 'The Angular Material library is a set of components and directives for building a complete user interface with Material Design.',
      }, {
        title: 'Angular Material',
        subtitle: 'The Angular Material library is a set of components and directives for building a complete user interface with Material Design.',
      }
    ]
  }

}
