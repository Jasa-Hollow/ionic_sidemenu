import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})

export class FavoritoPage implements OnInit {

  favorite = false
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favorite = ! this.favorite;
  }

}
