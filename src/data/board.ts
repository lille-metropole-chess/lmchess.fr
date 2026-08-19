export type BoardMember = {
  photo: string;
  firstName: string;
  role: string;
  email: string;
};

export const boardMembers: BoardMember[] = [
  { photo: 'sylvain.jpeg', firstName: 'Sylvain', role: 'Président', email: 'sylvduva@gmail.com' },
  { photo: 'oriane.jpeg', firstName: 'Oriane', role: 'Secrétaire', email: 'oriane.soubirou@hei.fr' },
  { photo: 'alex.jpeg', firstName: 'Alex', role: 'Trésorier', email: 'alexandre.lillemc@gmail.com' },
  { photo: 'thomas.jpeg', firstName: 'Thomas', role: 'Responsable Événements et Directeur du Lille Métropole Chess Tour', email: 'thomaslen@orange.fr' },
  { photo: 'patrick.jpeg', firstName: 'Patrick', role: 'Responsable Accueil des nouveaux joueurs', email: '' },
  { photo: 'gia-thuy.jpg', firstName: 'Gia-Thuy', role: 'Webmaster', email: '' },
  { photo: 'serge.png', firstName: 'Serge', role: 'Responsable matériel', email: '' },
  { photo: 'tanguy.jpeg', firstName: 'Tanguy', role: 'Al Tangone', email: '' },
];
