import { Component, signal } from '@angular/core';
import DEMANDE_MOCK from '../../../shared/mock/demande.mock';
import { Demande } from '../../../../model/DemandeModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demande',

  imports: [RouterLink],
  templateUrl: './demande.html',
  styleUrl: './demande.css'
})
export class DemandeListe {
  demandes = signal<Demande[]>(DEMANDE_MOCK)
}
