import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Metodologias';
  user=window.sessionStorage.getItem('user');

  logOut(){
    console.log("HOLLOOOO");
    
    window.sessionStorage.removeItem('user');
    window.localStorage.removeItem('user');
    window.location.reload();
  }
}
