import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { QuestionSectionComponent } from './question-section/question-section.component';
import { BackgroundDirective } from '../core/background.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BodyComponent,
    QuestionSectionComponent,
    BackgroundDirective
],
exports:[BodyComponent]
})
export class BodyModule { }