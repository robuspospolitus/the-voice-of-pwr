export type Comment = {
  id: string;
  author: string;
  role: string;
  time: string;
  content: string;
  likes: number;
};

export type Thread = {
  id: string;
  title: string;
  category: string;
  author: string;
  role: string;
  time: string;
  content: string;
  likes: number;
  commentsCount: number;
  tags: string[];
  comments: Comment[];
};
