import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { ThemeComponent } from './theme/theme.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [AppComponent, ColorComponent, ThemeComponent, DataComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
