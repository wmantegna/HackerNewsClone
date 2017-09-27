export class Post {
  title: string;
  url: string;
  text: string;
  score: number;

  toJson(){
    return JSON.stringify(this);
  }
}