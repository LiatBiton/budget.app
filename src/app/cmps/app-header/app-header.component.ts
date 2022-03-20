import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class AppHeaderComponent implements OnInit {
  mobileMenu: boolean = false
  constructor(private _eref: ElementRef) { }
  
  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
      this.closeModel();
   }

  ngOnInit(): void {
  }

  openMenu(){
    this.mobileMenu = true
    console.log(this.mobileMenu)
    // document.addEventListener('click', () => this.closeModel());
  }

  closeModel(){
    this.mobileMenu = false
    console.log(this.mobileMenu)
  }
  // close(){
  //   this.mobileMenu = !this.mobileMenu
  // }

}
