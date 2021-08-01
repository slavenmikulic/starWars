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
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SemaphoresModule } from "./components/semaphores/semaphores.module";
import { FilterModule } from "./components/filter/filter.module";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { CardListModule } from "./components/card-list/card-list.module";
import { MatChipsModule } from "@angular/material/chips";

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
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    SemaphoresModule,
    FilterModule,
    MatSelectModule,
    MatIconModule,
    CardListModule,
    MatChipsModule,
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
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    SemaphoresModule,
    FilterModule,
    MatSelectModule,
    MatIconModule,
    CardListModule,
    MatChipsModule,
  ],
  declarations: []
})
export class CoreModule {
}
