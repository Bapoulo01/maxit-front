import { Component, inject, signal } from '@angular/core';
import COMPTE_MOCK from '../../../shared/mock/compte.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from '../../../../model/CompteModel';

@Component({
  selector: 'app-compte-detail',
  imports: [],
  templateUrl: './compte-detail.html',
  styleUrl: './compte-detail.css'
})
export class CompteDetail {
route = inject(ActivatedRoute);
router = inject(Router);
compte=signal<Compte | undefined>(undefined);
ngOnInit(): void {
    const numero = this.route.snapshot.paramMap.get("numero");
    const compteData=COMPTE_MOCK.find(compte => compte.numero === numero);
    if (!compteData) {
         this.router.navigate(['/**']);
    } else {
            this.compte.set(compteData);
    }
  }
}
