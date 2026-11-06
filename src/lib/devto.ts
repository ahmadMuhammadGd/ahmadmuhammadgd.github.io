
export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  slug: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image: string | null;
}

const API_URL =
  "https://dev.to/api/articles?username=ahmadmuhammad";

export async function getArticles(): Promise<DevToArticle[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`DEV.to API returned ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch DEV.to articles:", error);
    return [];
  }
}
