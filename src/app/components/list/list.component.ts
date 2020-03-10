import { Component, OnInit } from '@angular/core';
import data from '../../../assets/files/data.json'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  previous: any;

  constructor() { }

  ngOnInit() {
    this.previous = data.data;
  }

}
