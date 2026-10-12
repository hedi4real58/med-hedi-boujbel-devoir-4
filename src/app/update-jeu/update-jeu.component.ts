import { Component, OnInit } from '@angular/core';
import { Jeu } from '../jeux.model';
import { ActivatedRoute } from '@angular/router';
import { JeuService } from '../services/jeu.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-jeu',
  imports: [FormsModule,DatePipe],
  templateUrl: './update-jeu.component.html',
  styles: ``
})
export class UpdateJeuComponent implements OnInit {
  currentJeu = new Jeu();
  //
  categories! : Categorie[];
  updateCatid! : number;
  //

  constructor(private activatedRoute : ActivatedRoute , private jeuservice : JeuService , private router : Router){

  }
  ngOnInit(): void {
    //
    this.categories=this.jeuservice.listeCategorie();

    this.currentJeu =this.jeuservice.consulterJeu(this.activatedRoute.snapshot.params['id']);
    this.updateCatid=this.currentJeu.categorie?.idCat !;
    console.log(this.currentJeu);
  }
  updateJeu(){
    //
    this.currentJeu.categorie=this.jeuservice.consulterCategorie(this.updateCatid);
    this.router.navigate(['/jeux'])
    //console.log(this.currentJeu);
    this.jeuservice.updateJeu(this.currentJeu);
  }
}
