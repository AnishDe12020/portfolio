import { ReadTimeResults } from "reading-time";

interface HashnodePost {
  _id: string;
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
  readingTime: ReadTimeResults;
  wordCount: number;
}

interface HashnodePostWithPlaceHolderImage extends HashnodePost {
  placeholderImage: string;
}

export type { HashnodePost, HashnodePostWithPlaceHolderImage };
