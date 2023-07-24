import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class DialogService {
  showSuccess(message: any, title: any) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'question',
      allowOutsideClick: false,
      showConfirmButton: false,
    });
  }

  close() {
    Swal.close();
  }
}
