import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryFormComponent } from './components/story-form/story-form.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { SprintCalculatorComponent } from './components/sprint-calculator/sprint-calculator.component';
import { SprintListComponent } from './components/sprint-list/sprint-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoryFormComponent,
    StoryListComponent,
    SprintCalculatorComponent,
    SprintListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
