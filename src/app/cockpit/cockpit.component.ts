import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = ''; //jika menggunakan local reference bisa dicoment variable yg kita buat
  newServerContent = '';
  //buat properties dibawah supaya bisa ketrigger sama event di parent
  //make listenable from outside add output pass something out of component
  @ViewChild('serverContentInput') serverContentInput :ElementRef;
  //add element ref to refenece to that element
  //passed argument here, to call properties
  @Output() serverCreated = new EventEmitter < {
    serverName: string,
    serverContent: string
  } > ();
  @Output() bluePrintCreated = new EventEmitter < {
    serverName: string,
    serverContent: string
  } > ();
  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    //sample local references to get access to some elements in your
    //template in your element and also can pass it on typescript
    //bisa juga digtambahkan html element property untuk menjelaskan secara gamblang property tersebut
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput.nativeElement.value);
    //diatas addalah native element fungsinya to get access to underlying element
    this.bluePrintCreated.emit({
      serverName:  nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
