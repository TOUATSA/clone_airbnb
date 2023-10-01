import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent implements OnInit {

  public apartment : FormGroup = new FormGroup([]);
  constructor( private formBuilder : FormBuilder ){}

  ngOnInit(): void {
      this.apartment = this.formBuilder.group( {
        nom_prenom : ['', Validators.required],
        telephone : ['', Validators.required],
        adresse : ['', Validators.email],
        naissance : [''],
        description : [''],
        profession : [],
        tags : this.formBuilder.array([])
      } )
  }

  public get tags(): FormArray {
    return this.apartment.get("tags") as FormArray;
  }

  public addTags() : void{
    this.tags.push( new FormControl() );
  }

  public deleteTag( index : number ) : void{
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }

  saveApartment() :void {

      console.log('====================================');
      console.log( this.apartment.value );
      console.log('====================================');

  }

}
