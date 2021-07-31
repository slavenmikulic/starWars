import { NgModule } from "@angular/core";
import { SemaphoresComponent } from "./components/semaphores.component";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FlexModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    SemaphoresComponent,
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SemaphoresComponent
  ]
})
export class SemaphoresModule {
}
