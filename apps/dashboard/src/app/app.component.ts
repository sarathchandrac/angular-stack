import { Component } from '@angular/core';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/widgets', icon: 'view_list', title: 'widgets' },
    { path: '/datatable', icon: 'view_list', title: 'Datatable' },
    { path: '/todolist', icon: 'view_list', title: 'Datatable' },
  ];

  logout() {  }

  toggleSidenav() { }
}
