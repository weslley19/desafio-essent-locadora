export interface Category {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCategory extends Omit<Category, 'id'> {}
