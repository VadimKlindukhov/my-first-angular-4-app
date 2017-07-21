import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { LogServiceService } from 'app/app/services/log-service.service';

@Directive({
  selector: '[appLogable]'
})
export class LogableDirective {

  constructor(
    private log: LogServiceService
  ) { }

@HostListener('click') onClick() {
  console.log(this.messageId || 228);
}
@Input('message-id') messageId: number;

}
