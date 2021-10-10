import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string,
  name: string,
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
