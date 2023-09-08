import axiosInstance from './baseUrl';

export interface NewsResponse {
    map(arg0: (newsHeadline: NewsResponse) => import("react").JSX.Element): import("react").ReactNode;
    status: string;
    totalResults: number;
    articles: Article[];
  }
  
  export interface Article {
    source: {
      id: string | null;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

export const fetchTopBusinessHeadlines = async (): Promise<NewsResponse> => {
  try {
    const response = await axiosInstance.get('/top-headlines', {
      params: {
        country: 'in',
        category: 'business',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};