import { Component } from '@angular/core';
import { resize } from 'src/codecs/resize/processor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mozjpegScript: HTMLScriptElement = null;

  constructor() {
    resize(null, {
      width: 1,
      height: 1,
      method: 'lanczos3',
      fitMethod: 'contain',
      linearRGB: true,
      premultiply: true,
    });
  }
}
