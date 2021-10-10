import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
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
    ClientesPageRoutingModule,
    ComponentsModule
=======
    ClientesPageRoutingModule
>>>>>>> 2e96ffea643091bd08fa7ce67d9511d37ad2d544
  ],
  declarations: [ClientesPage]
})
export class ClientesPageModule {}
