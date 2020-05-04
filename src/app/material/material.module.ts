import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

const material = [
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }