import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../services/temp-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  lists: any = []
  constructor(public tempdataAPI: TempDataService) { }

  ngOnInit(): void {
    this.lists = this.tempdataAPI.getLists();
  }

}
