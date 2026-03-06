import type { SpendingCategory } from '../types';

export const TOTAL_BUDGET = 110.6;
export const FISCAL_YEAR = 'FY 2025-26';

export const categories: SpendingCategory[] = [
  {
    name: 'Police Department',
    amount: 42.7,
    percentage: 38.7,
    label: '$42.7M',
    subCategories: [
      { name: 'Field Operations (Patrol)', amount: 26.9, label: '$26.9M' },
      { name: 'Investigations (Detectives)', amount: 6.3, label: '$6.3M' },
      { name: 'Administration', amount: 4.6, label: '$4.6M' },
      { name: 'Services Division (Records)', amount: 4.6, label: '$4.6M' },
      { name: 'Grants', amount: 0.5, label: '$0.5M' },
    ],
  },
  {
    name: 'Fire Department',
    amount: 28.4,
    percentage: 25.7,
    label: '$28.4M',
    subCategories: [
      { name: 'Suppression (Firefighters)', amount: 24.0, label: '$24.0M' },
      { name: 'Administration', amount: 2.6, label: '$2.6M' },
      { name: 'Prevention (Fire Marshal)', amount: 1.6, label: '$1.6M' },
      { name: 'Grants', amount: 0.3, label: '$0.3M' },
    ],
  },
  {
    name: 'Public Works',
    amount: 13.2,
    percentage: 11.9,
    label: '$13.2M',
    subCategories: [
      { name: 'Streets', amount: 11.2, label: '$11.2M' },
      { name: 'Engineering', amount: 1.3, label: '$1.3M' },
      { name: 'Public Land Development', amount: 0.6, label: '$0.6M' },
    ],
  },
  {
    name: 'Community Services',
    amount: 8.7,
    percentage: 7.9,
    label: '$8.7M',
    subCategories: [
      { name: 'Parks', amount: 4.3, label: '$4.3M' },
      { name: 'Recreation Programs', amount: 2.2, label: '$2.2M' },
      { name: 'Redding Sports Complex', amount: 0.9, label: '$0.9M' },
      { name: 'Aquatic Center', amount: 0.6, label: '$0.6M' },
      { name: 'Administration', amount: 0.7, label: '$0.7M' },
    ],
  },
  {
    name: 'Development Services',
    amount: 6.5,
    percentage: 5.9,
    label: '$6.5M',
    subCategories: [
      { name: 'Building Department', amount: 2.6, label: '$2.6M' },
      { name: 'Planning', amount: 2.1, label: '$2.1M' },
      { name: 'Code Enforcement', amount: 1.0, label: '$1.0M' },
      { name: 'Permit Center', amount: 0.7, label: '$0.7M' },
    ],
  },
  {
    name: 'General Government',
    amount: 11.1,
    percentage: 10.0,
    label: '$11.1M',
    subCategories: [
      { name: 'Non-Departmental', amount: 4.3, label: '$4.3M' },
      { name: 'Financial Services', amount: 2.6, label: '$2.6M' },
      { name: 'City Manager', amount: 1.2, label: '$1.2M' },
      { name: 'Personnel', amount: 1.0, label: '$1.0M' },
      { name: 'City Attorney', amount: 0.9, label: '$0.9M' },
      { name: 'City Clerk', amount: 0.9, label: '$0.9M' },
      { name: 'City Council', amount: 0.2, label: '$0.2M' },
    ],
  },
];
