import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommend-list',
  templateUrl: './recommend-list.component.html',
  styleUrls: ['./recommend-list.component.scss']
})
export class RecommendListComponent implements OnInit {
  @Input() list: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
