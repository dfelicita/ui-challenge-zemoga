import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  cardInfo: any = { "title": "Pope Francis?", "description": "He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)", "date": "03/09/2020", "thumbsUp": 36, "thumbsDown": 64, "postLink": "#", "link": "https://en.wikipedia.org/wiki/Pope_Francis", "category": "Politics"}

  constructor() { }

  ngOnInit() {
  }

}
