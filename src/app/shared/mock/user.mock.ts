import { UserList } from "../../../model/UserModel";

export const USER_MOCK: UserList = [
  { id: 1, nom: 'Ba', prenom: 'Amadou', email: 'test@gmail.com', password: 'passer123', role: 'Client' },
  { id: 2, nom: 'Diallo', prenom: 'Moussa', email: 'moussa@gmail.com', password: 'passer123', role: 'Client' },
  { id: 3, nom: 'Koné', prenom: 'Aissatou', email: 'aissatou@gmail.com', password: 'passer123', role: 'Admin' },
  { id: 4, nom: 'Traoré', prenom: 'Fatoumata', email: 'fatou@gmail.com', password: 'passer123', role: 'Admin' }
];

export default USER_MOCK;
