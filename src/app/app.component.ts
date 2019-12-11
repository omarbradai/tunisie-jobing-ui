import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tunisie-jobing-ui';

  public routes: Route[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.routes = this.router.config.filter(routes => routes.data.isNavigationRoute);
    console.log("routes", this.routes);
  }
}
