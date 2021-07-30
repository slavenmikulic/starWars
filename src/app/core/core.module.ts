import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [
    FlexLayoutModule,
    MatTableModule,
    MatTabsModule
  ],
  declarations: []
})
export class CoreModule {
}
