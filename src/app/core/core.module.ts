import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "./components/header/header.module";

@NgModule({
  imports: [
    FlexLayoutModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule,
    HeaderModule
  ],
  exports: [
    FlexLayoutModule,
    MatTableModule,
    MatTabsModule,
    HeaderModule
  ],
  declarations: []
})
export class CoreModule {
}
