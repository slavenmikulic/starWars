import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { FlexModule } from "@angular/flex-layout";
import { SemaphoresModule } from "../semaphores/semaphores.module";
import { CardListItemComponent } from "./components/card-list-item/card-list-item.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";


@NgModule({
  declarations: [
    CardListComponent,
    CardListItemComponent
  ],
  exports: [
    CardListComponent,
    CardListItemComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    SemaphoresModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class CardListModule {
}
