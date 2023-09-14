import { Component } from '@angular/core';

@Component({
  selector: 'app-choice-type-properties-bar',
  templateUrl: './choice-type-properties-bar.component.html',
  styleUrls: ['./choice-type-properties-bar.component.css']
})
export class ChoiceTypePropertiesBarComponent {
valueMin: number = 9;
valueMax: number = 600;
devise: string = "$";

}
