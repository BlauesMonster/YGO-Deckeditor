import { Component, OnInit } from '@angular/core';
import { Cardtype } from './helper/Cardtype';
import { Spellcardicon } from './helper/Spellcardicon';
import { Trapcardicon } from './helper/Trapcardicon';
import { Monstercardtype } from './helper/Monstercardtype';
import { Attribute } from './helper/Attribute';
import { Race } from './helper/Race';
import { Ruling } from './helper/Ruling';
import { Category } from './helper/Category';
import { Linkmarker } from './helper/Linkmarker';
import { LinkMarker2 } from './helper/LinkMarker2';

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
  public selectedFilterCardTypeOptions = []

  public filterSpellcardTypes = Spellcardicon;
  public filterSpellcardTypeOptions = [];
  public currentFilterSpellcardType: Spellcardicon | null = null

  public filterTrapcardTypes = Trapcardicon;
  public filterTrapcardTypeOptions = [];
  public currentFilterTrapcardType: Trapcardicon | null = null

  public filterMonstercardTypes = Monstercardtype;
  public filterMonstercardTypeOptions = [];
  public currentFilterMonstercardType: Monstercardtype | null = null

  public filterRulingTypes = Ruling;
  public filterRulingTypeOptions = [];
  public currentFilterRulingType: Ruling | null = null

  public filterAttributeTypes = Attribute;
  public filterAttributeTypeOptions = [];
  public currentFilterAttributeType: Attribute | null = null

  public filterCategoryTypes = Category;
  public filterCategoryTypeOptions = [];
  public filterCategoryTypeOptionsCheckboxes = []
  public selectedFilterCategoryType: Array<{ category: Category, checked: boolean }> = []

  public filterLinkMarkerTypes = LinkMarker2;
  public filterLinkMarkerOptions = [];
  public filterLinkMarkerTypeOptionsCheckboxes = []
  public selectedFilterLinkMarkerType: Array<{ category: LinkMarker2, checked: boolean }> = []

  public filterRaceTypes = Race;
  public filterRaceTypeOptions = [];
  public currentFilterRaceType: Race | null = null

  public currentAtk: number | null = null
  public currentDef: number | null = null
  public currentLvl: number | null = null
  public currentScale: number | null = null
  public currentName: string | null = null


  ngOnInit(): void {
    this.filterCardTypeOptions = Object.keys(this.filterCardTypes);
    this.filterMonstercardTypeOptions = Object.keys(this.filterMonstercardTypes)
    this.filterSpellcardTypeOptions = Object.keys(this.filterSpellcardTypes)
    this.filterTrapcardTypeOptions = Object.keys(this.filterTrapcardTypes)
    this.filterRaceTypeOptions = Object.keys(this.filterRaceTypes)
    this.filterAttributeTypeOptions = Object.keys(this.filterAttributeTypes)
    this.filterRulingTypeOptions = Object.keys(this.filterRulingTypes)

    this.filterCategoryTypeOptions = Object.keys(this.filterCategoryTypes)
    this.filterCategoryTypeOptions.forEach(value => this.filterCategoryTypeOptionsCheckboxes.push({ value, checked: false }))

    this.filterLinkMarkerOptions = Object.keys(this.filterLinkMarkerTypes)
    this.filterLinkMarkerOptions.forEach(value => this.filterLinkMarkerTypeOptionsCheckboxes.push({ value, checked: false }))
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
    this.currentFilterCardType = cardtype
  }

  onMonsterCardTypeChanged(monstercardtype: Monstercardtype) {
    console.log(monstercardtype)
    this.currentFilterMonstercardType = monstercardtype
    this.addTag(monstercardtype)
  }

  onSpellCardTypeChanged(spellcardtype: Spellcardicon) {
    console.log(spellcardtype)
    this.currentFilterSpellcardType = spellcardtype
  }

  onRulingChanged(ruling: Ruling) {
    console.log(ruling)
    this.currentFilterRulingType = ruling
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

  onCategoryTypeChanged(category: { category: Category, checked: boolean }, id: any, checked: boolean) {
    console.log(category, id, checked)
    category.checked = checked
    this.selectedFilterCategoryType = this.filterCategoryTypeOptionsCheckboxes.filter(value => value.checked === true)
    console.log(this.selectedFilterCategoryType)
  }

  onLinkMarkerChanged(category: { category: LinkMarker2, checked: boolean }, id: any, checked: boolean) {
    console.log(category, id, checked)
    category.checked = checked
    this.selectedFilterLinkMarkerType = this.filterLinkMarkerTypeOptionsCheckboxes.filter(value => value.checked === true)
    console.log(this.selectedFilterLinkMarkerType)
  }

  onRemoveTag(value: Monstercardtype) {
    const index: number = this.selectedFilterCardTypeOptions.indexOf(value);
    if (index !== -1) {
      this.selectedFilterCardTypeOptions.splice(index, 1);
    }
  }

  addTag(value: Monstercardtype) {
    const index: number = this.selectedFilterCardTypeOptions.indexOf(value);
    if (index === -1) {
      this.selectedFilterCardTypeOptions.push(value);
    }
  }

  onChangedAtk(value: number) {
    console.log(value)
    this.currentAtk = value
  }
  onChangedDef(value: number) {
    console.log(value)
    this.currentDef = value
  }
  onChangedLvl(value: number) {
    console.log(value)
    this.currentLvl = value
  }
  onChangedScale(value: number) {
    console.log(value)
    this.currentScale = value
  }
  onChangedName(value: string) {
    console.log(value)
    this.currentName = value
  }
  onClickedClear() {
    console.log("Clear pressed!")
  }
  onClickedSearch() {
    console.log("Search pressed!")
  }

  closeModal() {
    this.showModal = false
  }

  openModal() {
    this.showModal = true
    console.log(this.showModal)
  }

  public showModal: boolean

}
