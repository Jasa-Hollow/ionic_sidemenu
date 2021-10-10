import { Component, OnInit } from '@angular/core';

interface Cards {
  subtitle: string,
  title: string,
  img: string,
  content: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})

export class CardPage implements OnInit {

  constructor() { }

  cards: Cards[] = [
    {
      subtitle: 'Xenoblade 2 FINAL',
      title: 'Hilos de Fuego',
      img: 'assets/hdf.png',
      content: 'Bienvenidos al capítulo final de esta maravillosa historia, el final de la historia de Shulk y Rex llega a su fin...'
    }
  ]

  ngOnInit() {
  }

}
