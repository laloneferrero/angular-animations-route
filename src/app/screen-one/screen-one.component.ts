import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { routeTransitionAnimations } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.scss'],
  animations: [
    routeTransitionAnimations
  ]
})
export class ScreenOneComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  toggleAnimation(){
    this.router.navigate(['/second'])
  }

}
