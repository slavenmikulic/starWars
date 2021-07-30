import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header.component";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
