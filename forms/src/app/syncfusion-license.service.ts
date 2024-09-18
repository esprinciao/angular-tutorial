import { Injectable } from '@angular/core';
import { registerLicense } from '@syncfusion/ej2-base';

@Injectable({
  providedIn: 'root'
})
export class SyncfusionLicenseService {
  constructor() {
    // Register Syncfusion license key
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhIfkxxWmFZfVpgdV9FYlZQR2Y/P1ZhSXxXdkxjXn5dc3ZRTmlYVUM=');
  }
}
