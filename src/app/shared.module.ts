import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material imports
import { MatButtonModule } from '@angular/material/button';

const components = []

const modules = 
[CommonModule,
MatButtonModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [
    MatButtonModule,
    ...components,
    ...modules
  ]
})
export class SharedModule { }
