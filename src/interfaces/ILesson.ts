import { TDifficulty } from "../types/TDifficulty";
import { ISentence } from "./ISentence";
import { IWord } from "./word";

export interface ILesson {
  difficulty: TDifficulty;
  words: IWord[];
  sentences: ISentence[];
}
