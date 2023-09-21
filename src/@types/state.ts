export interface ICatObj {
  breeds: string[];
  categories: { id: number; name: string }[];
  id: string;
  url: string;
  width: string;
  height: string;
}

export interface ICatsState {
  isLoaded: boolean;
  results: ICatObj[];
}
