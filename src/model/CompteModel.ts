
export type StatutCompte = 'Actif' | 'Bloqué';
export class Compte {
    public constructor(
        public id: number,
        public numero: string,
        public dateCreation: string,
        public solde: number,
        public type: StatutCompte,
        public client: Client,
        public dateBlocage?: string,
    ){}
        public get bloqued(): boolean {
        if (this.dateBlocage) {
            return true
        }
        return false;
    }

    public get statut(): StatutCompte {
        if (this.bloqued) {
            return 'Bloqué';
        }
        return 'Actif';
    }

    public get dureeBlocage():number{
        if (this.bloqued && this.dateBlocage) {
            const dateCreation = new Date(this.dateCreation);
            const now= new Date();
            const difference=now.getTime() - dateCreation.getTime();
            return Math.ceil(difference / (1000 * 60 * 24)); // Convertit la différence en jours
        }
        return 0;
}
}
export interface Client {
    id: number;
    nom: string;
    prenom: string;
}
export type CompteList = Compte[];

