import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Jeu } from '../jeux.model';
import { JeuService } from '../services/jeu.service';
import { Categorie } from '../model/categorie.model';



@Component({
  selector: 'app-add-jeux',
  imports: [FormsModule],
  templateUrl: './add-jeux.component.html',
  styleUrl: './add-jeux.component.css'
})
export class AddJeuxComponent implements OnInit{
  newJeu = new Jeu();
  //
  categories! : Categorie[];
  newidCat! : number;
  newCategorie! : Categorie;
  //
  message : string='';
  constructor(private jeuservice : JeuService , private router : Router){

  }
  ngOnInit(): void {
    this.categories =this.jeuservice.listeCategorie();
  }
  addJeu(){
    //console.log(this.newJeu);
    
    this.newCategorie=this.jeuservice.consulterCategorie(this.newidCat);
    this.newJeu.categorie=this.newCategorie;
    this.jeuservice.addJeu(this.newJeu); 
    this.router.navigate(['/jeux'])
    this.message="le jeu " + this.newJeu.nomjeu + " est ajouté avec succés !"
  }



}
