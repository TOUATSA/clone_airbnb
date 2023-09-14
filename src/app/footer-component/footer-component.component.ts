import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
viewOngletMatcheBis(arg0: Object) {
  console.log( "evenement   -------------  " + arg0.valueOf() );
  Object.keys( arg0 ).forEach( element => console.log( "les cles    " + element )
   )
}

  public year : number= ( new Date() ).getFullYear();
  public affichePlusPopulaire :boolean = false;
  public affichePlusCote :boolean = false;
  public affichePlusMontagne :boolean = false;
  public affichePlusHiver :boolean = true;
  public affichePlusCategorie :boolean = false;
  public affichePlusActivite :boolean = false;


  public visibilityOngletPopulaire :boolean = false;
  public visibilityOngletCote :boolean = false;
  public visibilityOngletMontagne :boolean = false;
  public visibilityOngletSport :boolean = true;
  public visibilityOngletCategorie :boolean = false;
  public visibilityOngletActivite :boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  viewOngletMatche( ongletName : String ) {
    switch (ongletName) {
      case 'populaire':
        this.visibilityOngletPopulaire = true;
        this.visibilityOngletCote = false;
        this.visibilityOngletActivite = false;
        this.visibilityOngletCategorie = false;
        this.visibilityOngletSport = false;
        this.visibilityOngletMontagne = false;

        break;

      case 'cote':
        this.visibilityOngletPopulaire = false;
        this.visibilityOngletCote = true;
        this.visibilityOngletActivite = false;
        this.visibilityOngletCategorie = false;
        this.visibilityOngletSport = false;
        this.visibilityOngletMontagne = false;
        break;

      case 'sport':
        this.visibilityOngletPopulaire = false;
        this.visibilityOngletCote = false;
        this.visibilityOngletActivite = false;
        this.visibilityOngletCategorie = false;
        this.visibilityOngletSport = true;
        this.visibilityOngletMontagne = false;
        break;

      case 'categorie':
        this.visibilityOngletPopulaire = false;
        this.visibilityOngletCote = false;
        this.visibilityOngletActivite = false;
        this.visibilityOngletCategorie = true;
        this.visibilityOngletSport = false;
        this.visibilityOngletMontagne = false;
        break;

      case 'montagne':
        this.visibilityOngletPopulaire = false;
        this.visibilityOngletCote = false;
        this.visibilityOngletActivite = false;
        this.visibilityOngletCategorie = false;
        this.visibilityOngletSport = false;
        this.visibilityOngletMontagne = true;
        break;

      case 'activite':
        this.visibilityOngletPopulaire = false;
        this.visibilityOngletCote = false;
        this.visibilityOngletActivite = true;
        this.visibilityOngletCategorie = false;
        this.visibilityOngletSport = false;
        this.visibilityOngletMontagne = false;
        break;

      default:
        break;
    }
    throw new Error('Method not implemented.');
  }


}
