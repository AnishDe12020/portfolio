export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface RichText {
  html: string;
}

export interface HomeComponent {
  headingText: string;
  description: RichText;
  image: Image;
}
