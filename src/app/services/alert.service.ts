import { Injectable, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  showInfoSnackbar(message: string, titel?: string) {
    this.toastr.info(message, titel ?? '', {
      timeOut: 5000,
      positionClass: 'toast-info',
      closeButton: false,
    });
  }

  showInfoSnackbarSuccess(message: string, titel?: string) {
    this.toastr.success(message, titel ?? '', {
      timeOut: 5000,
      positionClass: 'toast-success',
      closeButton: false,
    });
  }
  clearAllToastsAfterDelay(delay: number = 10000) {
    setTimeout(() => {
      this.toastr.clear();
    }, delay);
  }
}
