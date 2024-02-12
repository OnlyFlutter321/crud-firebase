import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-firebase';
  showImage: boolean = false;
  imageUrl: string = '';
  toggleImage(url: string): void {
    this.imageUrl = url;
    this.showImage = !this.showImage;
  }
}
