import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

clickForChoiceBetweenDeviseOrLanguage( idChoice : string ) {
    if (idChoice === "devise") {
      this.visibilityAloneLangue = false;
    } else {
      this.visibilityAloneLangue = true;
    }
}


  public visibilityLangueDevise : boolean = false;
  public visibilityAloneLangue : boolean = true;
  public visibilityListConnect : boolean = false;
  public visibilitySecondList : boolean = false;
  public visibilityFirstList : boolean = true;

  ngOnInit(): void {
  }

runSearchApparts() {



}

viewSecondInternalListe(critere: string) : boolean {

  this.visibilitySecondList = true;
  this.visibilityFirstList = false;

  switch (critere) {
    case 'value':

      break;

    default:
      break;
  }
  return false;
}



viewForProfil() {
throw new Error('Method not implemented.');
}
viewBoxLanguageAndDevice() {
this.visibilityLangueDevise = true
return false
}

masquerPanelLangue() {
  //this.visibilityLangueDevise = false

  }

}
