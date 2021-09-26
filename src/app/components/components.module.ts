import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeadersComponent
  ],
  exports: [HeadersComponent],
  imports: [
    CommonModule,
    IonicModule
    
  ]
})
export class ComponentsModule { }
