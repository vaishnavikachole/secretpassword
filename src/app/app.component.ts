import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secretpassword';
  showSecret : boolean = false;
  log : any= [];

  onToggleDetails(){
    this.showSecret = !this.showSecret
    // console.log(this.log.length)
    // this.log.push(this.log.length + 1); 
    this.log.push(new Date())
  }

}
