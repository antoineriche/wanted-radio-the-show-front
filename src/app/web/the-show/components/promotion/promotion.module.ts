import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';



@NgModule({
  declarations: [PromotionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PromotionComponent
  ]
})
export class PromotionModule { }
