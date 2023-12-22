import { Injectable, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  showInfoSnackbar(message: string) {
    this.toastr.info(message, '', {
      timeOut: 5000,
      positionClass: 'toast-info',
      closeButton: false,
    });
  }

  showInfoSnackbarSuccess(message: string) {
    this.toastr.success(message, '', {
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
