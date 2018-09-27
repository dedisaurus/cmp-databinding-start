import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation : ViewEncapsulation.None
  //emulated default only component 
  //native give result as default
  //none change enforce by css setting all element
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content:string};
  
  //decorator bisa di aliaskan dengan memasukan nama alias setelah @input
  //untuk menggunakannya kita bisa memanggil dengan nama aliasnya pd halaman html

  constructor() { }

  ngOnInit() {
  }

}
