import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
interface Componente {
  icon: string,
  name: string,
  redirectTo: string;
}

=======
>>>>>>> 2e96ffea643091bd08fa7ce67d9511d37ad2d544
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

<<<<<<< HEAD
  componentes: Componente[]=[
    {
      icon: 'balloon',
      name: 'Clientes',
      redirectTo: '/clientes'
    },
    {
      icon: 'basketball',
      name: 'Action',
      redirectTo: '/action'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alerts',
      redirectTo: '/alert'
    },
    {
      icon: 'aperture-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'moon-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'information-circle-outline',
      name: 'FAB',
      redirectTo: '/fab'
    }
    
  ];
=======
>>>>>>> 2e96ffea643091bd08fa7ce67d9511d37ad2d544
  constructor() { }

  ngOnInit() {
  }

}
