import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Yaxito';
  randomImageNumber = 0;
  randomLogoNumber = 0;
  randomImageSrc = '';
  randomLogoSrc = '';
  constructor(public translate: TranslateService, public router: Router) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.randomImage();
    this.randomLogo();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomImage() {
    this.randomImageNumber = this.randomInteger(0, 3);
    if (this.randomImageNumber == 0) {
      this.randomImageSrc = 'assets/png/4stars.png';
    } else if (this.randomImageNumber == 1) {
      this.randomImageSrc = 'assets/png/pokeball.png';
    } else if (this.randomImageNumber == 2) {
      this.randomImageSrc = 'assets/png/donut.png';
    } else if (this.randomImageNumber == 3) {
      this.randomImageSrc = 'assets/png/luffy.png';
    }
  }

  randomLogo() {
    this.randomLogoNumber = this.randomInteger(0, 2);
    if (this.randomLogoNumber == 0) {
      this.randomLogoSrc = 'assets/png/face1.png';
    } else if (this.randomLogoNumber == 1) {
      this.randomLogoSrc = 'assets/png/face2.png';
    } else if (this.randomLogoNumber == 2) {
      this.randomLogoSrc = 'assets/png/face3.png';
    }
  }

  randomImageManual() {
    this.randomImageNumber = this.randomInteger(0, 3);
    if (this.randomImageNumber == 0) {
      this.randomImageSrc = 'assets/png/4stars.png';
      // Swal.fire({
      //   grow: 'row',
      //   backdrop: false,
      //   showConfirmButton: false,
      //   imageUrl: 'assets/gifs/goku.gif',
      //   timer: 3000,
      // });
      this.randomLogo();
    } else if (this.randomImageNumber == 1) {
      this.randomImageSrc = 'assets/png/pokeball.png';
      // Swal.fire({
      //   grow: 'row',
      //   backdrop: false,
      //   showConfirmButton: false,
      //   imageUrl: 'assets/gifs/pikachu.gif',
      //   timer: 3000,
      // });
      this.randomLogo();
    } else if (this.randomImageNumber == 2) {
      this.randomImageSrc = 'assets/png/donut.png';
      // Swal.fire({
      //   grow: 'row',
      //   backdrop: false,
      //   showConfirmButton: false,
      //   imageUrl: 'assets/gifs/simpsons.gif',
      //   timer: 3000,
      // });
      this.randomLogo();
    } else if (this.randomImageNumber == 3) {
      this.randomImageSrc = 'assets/png/luffy.png';
      // Swal.fire({
      //   grow: 'row',
      //   backdrop: false,
      //   showConfirmButton: false,
      //   imageUrl: 'assets/gifs/luffy.gif',
      //   timer: 3000,
      // });
      this.randomLogo();
    }
  }
}
