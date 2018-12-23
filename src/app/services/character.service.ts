import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Character } from '../shared/character';
import { Comic } from '../shared/comic';
import { Event } from '../shared/event';
import { Series } from '../shared/series';
import { Story } from '../shared/story';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({

  providedIn: 'root'
})
export class CharacterService {

  constructor(private restangular: Restangular) { }

  getCharacters(): Observable<Character[]> {
    return this.restangular.all('characters').getList();
  }

  getCharacter(id: number): Observable<Character> {
    return this.restangular.one('characters', id).get();
  }

  getChatacterComics(id: number): Observable<Comic[]> {
    return this.restangular.one('characters', id).all('comics').getList({limit: '3'});
  }

  getChatacterEvents(id: number): Observable<Event[]> {
    return this.restangular.one('characters', id).all('events').getList({limit: '3'});
  }

  getChatacterSeries(id: number): Observable<Series[]> {
    return this.restangular.one('characters', id).all('series').getList({limit: '3'});
  }

  getChatacterStories(id: number): Observable<Story[]> {
    return this.restangular.one('characters', id).all('stories').getList({limit: '3'});
  }
}
