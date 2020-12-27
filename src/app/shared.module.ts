import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material imports
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const components = []

const modules =
  [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
