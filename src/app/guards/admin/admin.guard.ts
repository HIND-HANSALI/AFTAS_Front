import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = new Router;
  
  const storedRole = localStorage.getItem('role');

  if (storedRole === 'ROLE_MANAGER') {
     return true; 
  } else {
    return false;
  }
};
