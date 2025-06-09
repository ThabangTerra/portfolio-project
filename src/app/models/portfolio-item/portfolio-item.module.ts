
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  client?: string;
  projectDate?: Date;
  projectUrl?: string;
}