import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'resume',
  templateUrl: 'resume.html',
})
export class ResumeDialog {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ResumeDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
