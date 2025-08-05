import { Demande, DemandeList, } from "../../../model/DemandeModel";
import USER_MOCK from "../../shared/mock/user.mock";

export const DEMANDE_MOCK: Demande[] = [
    new Demande(1,'D0001', 'AnnulationTransfert', 15000, 'En attente',new Date().toISOString().split('T')[0], USER_MOCK[0]),
    new Demande(2,'D0002','AchatWoyofal', 3000, 'Validée', new Date().toISOString().split('T')[0], USER_MOCK[0]),
    new Demande(3,'D0003', 'AnnulationTransfert', 7500, 'Refusée', new Date().toISOString().split('T')[0], USER_MOCK[1]),
    new Demande(4,'D0004','AnnulationTransfert', 2000, 'Validée', new Date().toISOString().split('T')[0], USER_MOCK[1]),
    new Demande(5,'D0006', 'AchatWoyofal', 5000, 'En attente', new Date().toISOString().split('T')[0], USER_MOCK[3]),
];

export default DEMANDE_MOCK;