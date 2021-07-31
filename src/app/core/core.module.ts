import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "./components/header/header.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  imports: [
    HeaderModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule,
    FlexModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  exports: [
    HeaderModule,
    FlexModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  declarations: []
})
export class CoreModule {
}
