export interface CleanedAchievement {
  id: string;
  title: string;
  date?: string;
  proof?: Proof;
  content: string;
}

export interface Proof {
  title: string;
  url: string;
}
