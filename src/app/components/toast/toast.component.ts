import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.sass']
})
export class ToastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeToast(event) {
    event.target.parentElement.classList.add("hidden");
  }

}