export interface IPost {
  id: number;
  content: string;
  user: number;
}
export const posts: IPost[] = [
  {
    id: 1,
    content: 'Post 01',
    user: 1,
  },
  {
    id: 2,
    content: 'Post 02',
    user: 2,
  },
  {
    id: 3,
    content: 'Post 03',
    user: 3,
  },
];
