export interface TypesPerson {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTypesPerson extends Omit<TypesPerson, 'id'> {}
