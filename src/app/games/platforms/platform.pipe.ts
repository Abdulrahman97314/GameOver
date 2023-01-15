import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'platform'
})
export class Platform2Pipe implements PipeTransform {

  transform(platform: any): any {
    if (platform=="PC (Windows)"){
      return `<i class="fab fa-windows me-1 text-muted"></i>`
    }
    else if(platform=="Web Browser"){
      return ` <i class="fas fa-window-maximize text-muted"></i>`
    }
  }
}
