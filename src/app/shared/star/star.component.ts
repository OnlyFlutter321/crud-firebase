import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  // template: `
  //   <div class="crop">
  //     <div [style.width.%]="(rating / 5) * 100">
  //       <span class="fa fa-star"></span>
  //       <span class="fa fa-star"></span>
  //       <span class="fa fa-star"></span>
  //       <span class="fa fa-star"></span>
  //       <span class="fa fa-star"></span>
  //     </div>
  //   </div>
  // `,
  // styles: [
  //   `
  //     .crop {
  //       overflow: hidden;
  //     }
  //     .fa-star {
  //       color: orange;
  //     }
  //   `,
  // ],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  cropWidth: number = 75;

  ngOnChanges(): void {
    console.log('Rating:', this.rating);
    this.cropWidth = this.rating * (75 / 5);
    console.log('Crop Width:', this.cropWidth);
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
