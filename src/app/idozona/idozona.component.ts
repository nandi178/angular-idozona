import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-idozona',
  templateUrl: './idozona.component.html',
  styleUrls: ['./idozona.component.css']
})
export class IdozonaComponent implements OnInit {
  @Input() idozona = "Europe/Budapest";
  @Input() aktualis = false;

  @Output() idozonaValtozas = new EventEmitter<string>();

  ido= '';

  constructor() { }

  ngOnInit(): void {
    this.frissit();
  }
  
  frissit() {
    this.ido = new Date().toLocaleString("hu-HU", {timeZone: this.idozona});
  }

  idozonaValtozasClicked() {
    this.idozonaValtozas.emit(this.idozona);
  }

}
