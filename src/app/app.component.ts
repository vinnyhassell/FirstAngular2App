import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi, my name is Vinny!';
  stringInterpolation = "This is a value";

  onTest()
  {
    return true;
  }


  onClicked(value: string)
  {
    alert(value);
  }
}
