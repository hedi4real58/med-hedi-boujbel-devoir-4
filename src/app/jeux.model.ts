import { Categorie } from "./model/categorie.model";

export class Jeu{
    idjeu! : number;
    nomjeu! : string;
    prixjeu! : number;
    dateCreation! : Date;
    categorie? : Categorie;
}