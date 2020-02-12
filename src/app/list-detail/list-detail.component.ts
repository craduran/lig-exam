import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() listDate: Date;
  @Input() listTitle: string;
  @Input() listDesc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
