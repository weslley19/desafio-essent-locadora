export interface Person {
  id: number;
  name: string;
  birthday: string;
  cpf: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreatePerson extends Omit<Person, 'id'> {}
