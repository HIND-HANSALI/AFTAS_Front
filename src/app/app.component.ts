import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AFTAS_Front';

  ngOnInit(): void {
    initFlowbite();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSidebar = !(event.url.includes('login') || event.url.includes('register')) // Hide sidebar on login page
        console.log('Show sidebar:', this.showSidebar);
      }
    });
  }

  showSidebar: boolean = true;

  constructor(private router: Router) { }


}
