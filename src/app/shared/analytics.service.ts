import { Injectable } from '@angular/core';

// @Injectable()
@Injectable({providedIn: 'root'})
export class AnalyticsService {
  registerClick() {
    console.log('Clicked!');
  }
}
