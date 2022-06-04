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
contentMarkdown: string;
}

type HashnodePostWithoutContent = Omit<HashnodePost, "contentMarkdown">;


interface HashnodePostWithPlaceHolderImage extends HashnodePostWithoutContent {
  placeholderImage: string;
}

export type {
  HashnodePost,
  HashnodePostWithoutContent,
  HashnodePostWithPlaceHolderImage
}
