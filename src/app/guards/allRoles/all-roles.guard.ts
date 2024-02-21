import { CanActivateFn, Router } from '@angular/router';

export const allRolesGuard: CanActivateFn = (route, state) => {
  const router = new Router;

  const role = localStorage.getItem('role');

  if (role === 'ROLE_JURY' || role === 'ROLE_MANAGER' || role === 'ROLE_MEMBER') {
    return true; 
 } else {
   return false;
 }
};
