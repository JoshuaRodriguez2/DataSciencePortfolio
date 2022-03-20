import { BreakpointObserver } from '@angular/cdk/layout';
import { JsonpClientBackend } from '@angular/common/http';
import {Component} from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { OnDestroy, OnInit } from '@angular/core';
import { MediaChange } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { map } from 'rxjs/operators';
import { ResumeDialog } from '../resume/resume';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  isWideScreen$: Observable<boolean>;
  isNotWideScreen$: Observable<boolean>;
  isWideScreenContact$: Observable<boolean>;
  isNotWideScreenContact$: Observable<boolean>;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog:MatDialog
  ) { }
  ngOnInit(): void {

    if (this.breakpointObserver.isMatched('( max-width: 600px)')) {
      console.info('The screen width is less than 600px');
    }
    this.isWideScreen$ = this.breakpointObserver
      .observe(['(max-width: 1070px)'])
      .pipe(map(({ matches }) => matches));
    this.isNotWideScreen$ = this.breakpointObserver
      .observe(['(min-width: 1070px)'])
      .pipe(map(({ matches }) => matches));
    
      this.isWideScreenContact$ = this.breakpointObserver
      .observe(['(max-width: 810px)'])
      .pipe(map(({ matches }) => matches));
      this.isNotWideScreenContact$ = this.breakpointObserver
      .observe(['(min-width: 810px)'])
      .pipe(map(({ matches }) => matches));
  }
  openDialog(){
    this.dialog.open(ResumeDialog);
  }
 }