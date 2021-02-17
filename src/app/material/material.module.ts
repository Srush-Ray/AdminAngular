import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

import { MatToolbarModule } from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card"
const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule
]
@NgModule({
  // declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
