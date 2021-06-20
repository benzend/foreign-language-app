export interface IUser {
  id: string;
  username: string;
  password: string;
  isAdmin: boolean;
  currentTargetLanguage: string | null;
}
