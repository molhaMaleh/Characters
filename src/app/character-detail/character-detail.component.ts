import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../shared/character';
import { Comic } from '../shared/comic';
import { Event } from '../shared/event';
import { Series } from '../shared/series';
import { Story } from '../shared/story';
import { CharacterService } from '../services/character.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;
  characterComics: Comic[];
  characterEvents: Event[];
  characterSeries: Series[];
  characterStories: Story[];
  errMess: string;
  id: number;

  constructor(private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) =>
    {
      this.id = +params['id'];
      return this.characterService.getCharacter(this.id);
    })
    .subscribe(character => this.character = character,
      errmess => this.errMess = <any>errmess);

    this.characterService.getChatacterComics(this.id)
    .subscribe(comics => this.characterComics = comics,
      errmess => this.errMess = <any>errmess);

    this.characterService.getChatacterEvents(this.id)
    .subscribe(events => this.characterEvents = events,
      errmess => this.errMess = <any>errmess);

    this.characterService.getChatacterSeries(this.id)
    .subscribe(series => this.characterSeries = series,
      errmess => this.errMess = <any>errmess);

    this.characterService.getChatacterStories(this.id)
    .subscribe(stories => this.characterStories = stories,
      errmess => this.errMess = <any>errmess);
  }

}
