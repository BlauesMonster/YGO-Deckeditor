import { Component, OnInit } from '@angular/core';
import { Cardtype } from './helper/Cardtype';
import { Spellcardicon } from './helper/Spellcardicon';
import { Trapcardicon } from './helper/Trapcardicon';
import { Monstercardtype } from './helper/Monstercardtype';
import { Attribute } from './helper/Attribute';
import { Race } from './helper/Race';

@Component({
  selector: 'app-deckeditor',
  templateUrl: './deckeditor.component.html',
  styleUrls: ['./deckeditor.component.css']
})
export class DeckeditorComponent implements OnInit {

  constructor() { }

  public maindeck: Array<any> = new Array(60)
  public extradeck: Array<any> = new Array(15)
  public sidedeck: Array<any> = new Array(15)

  public filterCardTypes = Cardtype;
  public filterCardTypeOptions = [];
  public currentFilterCardType: Cardtype | null = null

  public filterSpellcardTypes = Spellcardicon;
  public filterSpellcardTypeOptions = [];
  public currentFilterSpellcardType: Spellcardicon | null = null

  public filterTrapcardTypes = Trapcardicon;
  public filterTrapcardTypeOptions = [];
  public currentFilterTrapcardType: Trapcardicon | null = null

  public filterMonstercardTypes = Monstercardtype;
  public filterMonstercardTypeOptions = [];
  public currentFilterMonstercardType: Monstercardtype | null = null

  public filterAttributeTypes = Attribute;
  public filterAttributeTypeOptions = [];
  public currentFilterAttributeType: Attribute | null = null

  public filterRaceTypes = Race;
  public filterRaceTypeOptions = [];
  public currentFilterRaceType: Race | null = null


  ngOnInit(): void {
    this.filterCardTypeOptions = Object.keys(this.filterCardTypes);
    this.filterMonstercardTypeOptions = Object.keys(this.filterMonstercardTypes)
    this.filterSpellcardTypeOptions = Object.keys(this.filterSpellcardTypes)
    this.filterTrapcardTypeOptions = Object.keys(this.filterTrapcardTypes)
    this.filterRaceTypeOptions = Object.keys(this.filterRaceTypes)
    this.filterAttributeTypeOptions = Object.keys(this.filterAttributeTypes)
  }

  onCardTypeChanged(cardtype: Cardtype) {
    console.log(cardtype)
    // Or in a switch statement
    // switch (cardtype) {
    //   case this.filterCardTypes.Monster:
    //     console.log("m")
    //     // Do something
    //     break;
    //   case this.filterCardTypes.Spell:
    //     console.log("s")
    //     // Do something
    //     break;
    //   case this.filterCardTypes.Trap:
    //     console.log("t")
    //     // Do something
    //     break;
    //   default:
    //     console.log("n")
    //     break;
    // }
    this.currentFilterCardType=cardtype
  }

  onMonsterCardTypeChanged(monstercardtype: Monstercardtype) {
    console.log(monstercardtype)
    this.currentFilterMonstercardType = monstercardtype
  }

  onSpellCardTypeChanged(spellcardtype: Spellcardicon) {
    console.log(spellcardtype)
    this.currentFilterSpellcardType = spellcardtype
  }

  onTrapCardTypeChanged(trapcardtype: Trapcardicon) {
    console.log(trapcardtype)
    this.currentFilterTrapcardType = trapcardtype
  }

  onAttributeTypeChanged(attribute: Attribute) {
    console.log(attribute)
    this.currentFilterAttributeType = attribute
  }

  onRaceTypeChanged(race: Race) {
    console.log(race)
    this.currentFilterRaceType = race
  }

}
