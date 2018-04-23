import {Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .spacer {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
    }

    .red-color {
      color: red;
    }

    .mat-slider-horizontal {
      width: 100%;
    }

    label {
      font-weight: bold;
      margin: 1.5em 0;
      display: block;
    }

    #page-padding {
      padding: 0 1.5em 1.5em 1.5em;
    }
  `],
  // default encapsulation. For styling children use ViewEncapsulation.None or global styling
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  spaceScreens: Array<any>;
  max = 100;
  min = 0;
  step = 1;
  thumbLabel = true;
  value = 0;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.spaceScreens = data.screenshots;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }

}
