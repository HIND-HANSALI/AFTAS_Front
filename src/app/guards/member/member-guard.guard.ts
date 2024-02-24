import { CanActivateFn, Router } from '@angular/router';

export const memberGuardGuard: CanActivateFn = (route, state) => {
  const router = new Router;

  const role = localStorage.getItem('role');

  if (role === 'ROLE_MEMBER') {
    return true; 
 } else {
   return false;
 }
};
