import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "./components/header/header.module";

@NgModule({
  imports: [
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule,
    FlexModule,
    HeaderModule
  ],
  exports: [
    FlexModule,
    MatTableModule,
    MatTabsModule,
    HeaderModule
  ],
  declarations: []
})
export class CoreModule {
}
