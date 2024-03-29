import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoAnime: string = '';
  @Input()
  titleAnime: string = '';
  @Input()
  id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
