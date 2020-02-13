import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentlogo: string = "Website Logo";
  constructor(private router: Router, private route: ActivatedRoute) { 
    router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //this.currentlogo = params;
      if(params.has("id")) {
        console.log(params)
        this.currentlogo = params.get("id");
      }
    });
  }

}
