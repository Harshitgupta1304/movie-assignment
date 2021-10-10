import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu'
import { MatGridListModule } from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatSidenavModule,
  MatMenuModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTabsModule,
];


@NgModule({
  
  imports: [modules,
    CommonModule
  ],
  exports:modules
})
export class MaterialModule { }
