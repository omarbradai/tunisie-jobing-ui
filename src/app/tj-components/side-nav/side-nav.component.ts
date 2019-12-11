import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Route} from "@angular/router";

@Component({
  selector: 'tj-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
  @Input() routes: Route[];

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
