import { Injectable } from '@angular/core';
import { Jeu } from '../jeux.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  jeux : Jeu[];
  jeu! : Jeu;
  categories! : Categorie[];

  constructor() { 
    this.categories=[{idCat : 1  , nomCat : "action"},
      {idCat : 2 , nomCat : "fps"},{idCat : 3  , nomCat : "horreur"},{idCat : 4  , nomCat : "racing"},{idCat : 5  , nomCat : "party games"}
    ];




    this.jeux =[
    {idjeu : 1 , nomjeu : "Battlefield 5" , prixjeu : 29.99 , dateCreation : new Date ("11/20/2018"), categorie:{idCat : 2  , nomCat : "fps"}}, 
    {idjeu : 2 , nomjeu : "Forza Horizon 5" , prixjeu : 49.99 , dateCreation : new Date ("11/12/2021"),categorie:{idCat : 4  , nomCat : "racing"}}, 
    {idjeu : 3 , nomjeu : "dark souls 3" , prixjeu : 24.99 , dateCreation : new Date ("03/24/2016"),categorie:{idCat : 1 , nomCat : "action-RPG"}}
    ];
  }
  listeJeu():Jeu[]{
    return this.jeux;
  }
  addJeu(jeu : Jeu){
    this.jeux.push(jeu);
  }
  supprimerJeu(j : Jeu){
    const index = this.jeux.indexOf(j,0);
    if (index > -1){
      this.jeux.splice(index,1);
    }
  }
  consulterJeu (id:number): Jeu{
    return this.jeux.find(p => p.idjeu ==id)!;
    
  }
  updateJeu(j : Jeu){
    const index = this.jeux.indexOf(j,0);
    if (index > -1){
      this.jeux.splice(index,1);
      this.jeux.splice(index,0,j);
    }
  }

  listeCategorie():Categorie[]{
    return this.categories;
  }
  consulterCategorie(id:number):Categorie{
    return this.categories.find(cat => cat.idCat == id)!;
  }
}
