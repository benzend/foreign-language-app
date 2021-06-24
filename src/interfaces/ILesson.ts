import { TDifficulty } from "../types/TDifficulty";
import { TLanguages } from "../types/TLanguages";
import { ISentence } from "./ISentence";
import { IWord } from "./IWord";

export interface ILesson {
  difficulty: TDifficulty;
  targetLanguage: TLanguages;
  translationLanguage: TLanguages;
  words: IWord[];
  sentences: ISentence[];
}
