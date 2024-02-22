import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  

  hasAuthority(): boolean {

    const role = localStorage.getItem('role');

    return this.isLoggedIn() && (role === 'ADMIN' || role === 'SUPER_ADMIN');
  }

  hasAuthorityManager(): boolean {

    const role = localStorage.getItem('role');

    return this.isLoggedIn() && (role === 'ROLE_MANAGER');
  }

//   hasAuthorityManager(): boolean {
//     const role = localStorage.getItem('role');
//     console.log('Role from localStorage:', role); // Log the role to check its value
//     console.log('Is logged in:', this.isLoggedIn()); // Log the result of isLoggedIn() function

//     const isManager = this.isLoggedIn() && role === 'ROLE_MANAGER';
//     console.log('Is manager:', isManager); // Log the result of the condition check

//     return isManager;
// }
  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  isLoggedOut(): boolean{
    return localStorage.getItem('token') == null;
  }
  Logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(["login"])
  }

}
