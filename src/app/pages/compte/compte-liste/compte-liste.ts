import { Component, signal } from '@angular/core';
import { CompteList } from '../../../../model/CompteModel';
import COMPTE_MOCK from '../../../shared/mock/compte.mock';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-compte-liste',
  imports: [RouterLink],
  templateUrl: './compte-liste.html',
  styleUrl: './compte-liste.css'
})
export class CompteListe {
  comptes = signal<CompteList>(COMPTE_MOCK);

}
