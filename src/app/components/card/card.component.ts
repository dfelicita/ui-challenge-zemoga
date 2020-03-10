import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() active: boolean = false;
  @Input() cardInfo: any = {};

  constructor() { }

  ngOnInit() {
    
  }

}
