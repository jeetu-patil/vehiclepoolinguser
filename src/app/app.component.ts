import { Component } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehiclepoolinguser';

  ngOnInit(){
    Aos.init();
  }
}
