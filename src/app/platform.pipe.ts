import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'platform'
})
export class PlatformPipe implements PipeTransform {

  transform(platform: any): any {
    if (platform=="Windows"){
      return ` <i class="fab fa-windows me-1"></i> ${platform} `
    }
    else if(platform=="Web Browser"){
      return ` <i class="fas fa-window-maximize text-muted"></i> ${platform} `
    }
  }

}
