import { Client } from "../model/CompteModel";

export type StatutCompte = 'En attente' | 'Validée' | 'Refusée';
export type TypeDemande = 'AnnulationTransfert' | 'AchatWoyofal' | 'CreationCompte' | 'Autre';

export class Demande {
    constructor(
        public id: number,
        public numero: string,
        public type: TypeDemande, 
        public montant: number,
        public statut: StatutCompte,
        public date: string,
        public client: Client,
    ) {}
}

export type DemandeList = Demande[];
