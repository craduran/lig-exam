import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../services/temp-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  recommendedLists: any = [];
  constructor(public tempdataAPI: TempDataService) { }

  ngOnInit(): void {
    this.recommendedLists = this.tempdataAPI.getRecommendedLists();
  }

}
