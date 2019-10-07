import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() {

   

   }

  ngOnInit() {

    this.sidebarFn();

  }


  sidebarFn(){

    $(document).ready(function(){
      $("#sidebarToggle").click(function(){
        $(".sidebar").toggleClass("navShow");
      });
      
      $('.nav.side-menu > li').on('click', function(){
        if($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else { 
            $('.nav.side-menu > li').removeClass('active');
            $(this).addClass("active");		
        }
        });
      
    });

  }


}
