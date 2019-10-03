import { Injectable } from '@angular/core';
import { AppShareService } from '../../service/app-share.service';
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private appShare:AppShareService) {
    
  }

  getData(){
      this.appShare.post("url",{}).subscribe(
        response =>
        {
         console.log(response);
        }
      );
  }
 

}
