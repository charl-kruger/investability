import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-sideload',
  templateUrl: './sideload.component.html',
  styleUrls: ['./sideload.component.scss']
})
export class SideloadComponent implements OnInit {
  safeUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const url = 'https://angular.io/guide/router'
    this.safeUrl = this.transform(url);
  }

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
