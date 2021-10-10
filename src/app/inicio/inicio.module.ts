import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
<<<<<<< HEAD
import { ComponentsModule } from '../components/components.module';
=======
>>>>>>> 2e96ffea643091bd08fa7ce67d9511d37ad2d544

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    InicioPageRoutingModule,
    ComponentsModule
=======
    InicioPageRoutingModule
>>>>>>> 2e96ffea643091bd08fa7ce67d9511d37ad2d544
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
