import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToPage(a:string):void{
    this.router.navigate([a]);
  }

  ngOnInit() {
  }

}