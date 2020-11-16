import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NBA';
  nba = [
    {
      year: '2018',
      champion: 'Golden State Warriors',
      logo: '../assets/Golden-State-Warriors-logo.png',
      player:['Kevin Duran', 'Klay Thompson', 'Stephen Curry', 'Jordan Poole'],
    }, {
      year: '2019',
      champion: 'Toronto Raptors',
      logo: '../assets/raptors.png',
      player:['Chris Boucher', 'Oshae Brissett', 'Terence Davis', 'Marc Gasol'],
    }, {
      year: '2020',
      champion: 'Lakers',
      logo:'../assets/lakers.png',
      player: ['LeBron James', 'Anthony Davis', 'Head Coach', 'Frank Vogel'],
    },
  ]
}
