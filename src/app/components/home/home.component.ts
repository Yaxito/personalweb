import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    { image: "../../assets/coverimage/Volumen 1.png" },
    { image: "../../assets/coverimage/Volumen 2.png" },
    { image: "../../assets/coverimage/Volumen 3.png" },
    { image: "../../assets/coverimage/Volumen 4.png" },
    { image: "../../assets/coverimage/Volumen 5.png" },
    { image: "../../assets/coverimage/Volumen 6.png" },
    { image: "../../assets/coverimage/Volumen 7.png" },
    { image: "../../assets/coverimage/Volumen 8.png" },
    { image: "../../assets/coverimage/Volumen 9.png" },
    { image: "../../assets/coverimage/Volumen 10.png" },
    { image: "../../assets/coverimage/Volumen 11.png" },
    { image: "../../assets/coverimage/Volumen 12.png" },
    { image: "../../assets/coverimage/Volumen 13.png" },
    { image: "../../assets/coverimage/Volumen 14.png" },
    { image: "../../assets/coverimage/Volumen 15.png" },
    { image: "../../assets/coverimage/Volumen 16.png" },
    { image: "../../assets/coverimage/Volumen 17.png" },
    { image: "../../assets/coverimage/Volumen 18.png" },
    { image: "../../assets/coverimage/Volumen 19.png" },
    { image: "../../assets/coverimage/Volumen 20.png" },
    { image: "../../assets/coverimage/Volumen 21.png" },
    { image: "../../assets/coverimage/Volumen 22.png" },
    { image: "../../assets/coverimage/Volumen 23.png" },
    { image: "../../assets/coverimage/Volumen 24.png" },
    { image: "../../assets/coverimage/Volumen 25.png" },
    { image: "../../assets/coverimage/Volumen 26.png" },
    { image: "../../assets/coverimage/Volumen 27.png" },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
