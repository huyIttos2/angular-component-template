import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.css']
})
export class ProgessBarComponent implements OnInit {
  @Input() backGroundColor = '#d9d9d9';
  @Input() progressColor = '#4CAF50';
  @Input() width  = 50;
  constructor() { }

  ngOnInit() {
  }

}
