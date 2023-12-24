export interface AgeCategoryStats {
  categories: AgeCategory[];
  totalUsers: number;
}
export interface AgeCategory {
  range: string;
  count: number;
}
