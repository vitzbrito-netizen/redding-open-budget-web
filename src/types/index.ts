export interface SubCategory {
  name: string;
  amount: number;
  label: string;
}

export interface SpendingCategory {
  name: string;
  amount: number;
  percentage: number;
  label: string;
  subCategories?: SubCategory[];
}
