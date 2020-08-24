import { Attribute } from "./Attribute";
import { AtkEnum } from "./AtkEnum";
import { Cardtype } from "./Cardtype";
import { Linkmarker } from "./Linkmarker";
import { Metadata } from "./Metadata";
import { Monstercardtype } from "./Monstercardtype";
import { Pendulum } from "./Pendulum";
import { Race } from "./Race";
import { Spellcardicon } from "./Spellcardicon";
import { Trapcardicon } from "./Trapcardicon";

export interface Card {
  id: number;
  name: string;
  text?: string;
  cardtype: Cardtype;
  spellcardicon?: Spellcardicon;
  metadata: Metadata;
  monstercardtype?: Monstercardtype[];
  atk?: AtkEnum | number;
  def?: AtkEnum | number;
  attribute?: Attribute;
  race?: Race;
  level?: number | null;
  trapcardicon?: Trapcardicon;
  pendulum?: Pendulum;
  linkmarker?: Linkmarker;
  link?: number;
  rank?: number;
}
