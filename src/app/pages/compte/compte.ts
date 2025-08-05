import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-compte',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './compte.html',
  styleUrl: './compte.css'
})
export class Compte {

}
