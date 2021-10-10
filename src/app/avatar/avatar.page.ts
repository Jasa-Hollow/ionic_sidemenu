import { Component, OnInit } from '@angular/core';

interface Avatar {
  img: string,
  name: string,
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})

export class AvatarPage implements OnInit {

  constructor() { }

  avatar: Avatar[]=[
    {
      img: 'assets/hdf.png',
      name: 'Joel Sandoval',
    },
    {
      img: 'assets/hdf.png',
      name: 'Alexander Alvarenga',
    }
  ];

  ngOnInit() {
  }

}
