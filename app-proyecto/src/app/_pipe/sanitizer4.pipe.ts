import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer4'
})
export class Sanitizer4Pipe implements PipeTransform {

  constructor(public dom: DomSanitizer) { }
  
  transform(value: string, args): any {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
