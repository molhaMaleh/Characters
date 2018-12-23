import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: Character[];
  errMess: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters,
      errmess => this.errMess = <any>errmess);

  }

}
