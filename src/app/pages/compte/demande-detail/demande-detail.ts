import { Component, inject, signal } from '@angular/core';
import DEMANDE_MOCK from '../../../shared/mock/demande.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from '../../../../model/DemandeModel';

@Component({
  selector: 'app-demande-detail',
  imports: [],
  templateUrl: './demande-detail.html',
  styleUrl: './demande-detail.css'
})
export class DemandeDetail {
route = inject(ActivatedRoute);
router = inject(Router);
demande=signal<Demande | undefined>(undefined);
ngOnInit(): void {
    const numero = this.route.snapshot.paramMap.get("numero");
    const demandeData=DEMANDE_MOCK.find(demande => demande.numero === numero);
    if (!demandeData) {
         this.router.navigate(['/**']);
    } else {
            this.demande.set(demandeData);
    }
  }
}
