import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const MATERIAL_MODULES = [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule];

const COMPONENTS = [
  // ThemeSwitcherComponent,
  // HeaderComponent,
  // FooterComponent,
  // SearchInputComponent,
  // ThemeSettingsComponent,
  // TinyMCEComponent,
  // OneColumnLayoutComponent,
  // SampleLayoutComponent,
  // ThreeColumnsLayoutComponent,
  // TwoColumnsLayoutComponent,
  // ModalComponent
  MyNavComponent
];

@NgModule({
  imports: [...BASE_MODULES, ...MATERIAL_MODULES],
  declarations: [...COMPONENTS],
  exports: [...BASE_MODULES, ...COMPONENTS],
})
export class ThemeModule {}
