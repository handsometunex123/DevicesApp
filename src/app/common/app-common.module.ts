import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from './material-ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, MaterialUiModule, RouterModule],
  exports: [MaterialUiModule, RouterModule, ReactiveFormsModule],
})
export class AppCommonModule {}
