import { Component } from '@angular/core';
import { JokeService } from './joke_service/joke_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'joke_app';
  buttonText = "Show Punchline";
  setup = "Loading...";
  punchline = null;
  jokeRetrieved = false;
  showPunchline = false;

  constructor (private jokeService: JokeService) {}

  ngOnInit() {
    this.jokeService.getRandomJoke().subscribe({
      next: joke => this.handleApiResponse(joke),
      error: error => this.handleApiError()
    });
  }

  changeJoke() {
    this.buttonText = this.showPunchline ? "Show Punchline" : "Hide Punchline";
    this.showPunchline = !this.showPunchline;
  }

  handleApiResponse(joke: any) {
    if(joke.hasOwnProperty('punchline')) {
      this.setup = joke.setup;
      this.punchline = joke.punchline;
      this.jokeRetrieved = true;
    }
    else {
      this.setup = "Looks like the joke API is down";
    }
  }

  handleApiError() {
    this.setup = "Looks like the joke API is down";
  }
}
