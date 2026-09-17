import posts from '../../media-posts/posts.json';

export const MEDIA_POSTS = [...posts].sort((a, b) => b.date.localeCompare(a.date));
export const TEMPLATE_LABELS: Record<string, string> = {
  simple: 'Simple',
  gaussian: 'Gaussian geometry',
  'low-poly': 'Low-poly geometry',
};
export const mediaAsset = (slug: string, template: string, extension: string) =>
  `/media-posts/${slug}/${template}.${extension}`;
