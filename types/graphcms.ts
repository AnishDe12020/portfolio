export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface HomeComponent {
  headingText: string;
  description: string;
  image: Image;
}
