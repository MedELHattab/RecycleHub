// src/app/core/guards/collector.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CollectorGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  
  }
}
