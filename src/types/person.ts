export interface Person {
  id: number;
  name: string;
  birthday: string;
  cpf: string;
  TypePersonType?: TypePersonType[]
  createdAt?: string;
  updatedAt?: string;
}

interface TypePersonType {
  id: number,
  personId: number,
  typePersonId: number,
  createdAt: string,
  updatedAt: string,
  typePerson: TypePerson
}

interface TypePerson {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string
}

export interface CreatePerson {
  name: string;
  birthday: string;
  cpf: string;
  TypePersonType: string
}
