import { ILesson } from "./ILesson";

export interface TargetLanguage {
  language: string;
  lessons: ILesson[];
}
