export interface UserModel {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: 'Admin' | 'Client';
}

export type UserList = UserModel[];
