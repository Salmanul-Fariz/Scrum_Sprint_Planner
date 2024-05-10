import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoryService } from '../../service/story.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrl: './sprint-calculator.component.scss',
})
export class SprintCalculatorComponent implements OnInit {
  StoryFormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private _StoryService: StoryService
  ) {}

  ngOnInit() {
    this.StoryFormData = this.builder.group({
      storyPoint: ['', Validators.required],
    });
  }

  // Submit the Form data for Auto select
  submitForm(): void {
    if (this.StoryFormData.invalid) {
      return;
    }

    const { storyPoint } = this.StoryFormData.controls;

    this._StoryService.autoSelectStories(storyPoint.value);

    this.StoryFormData.reset();
  }

  // Clear the strories
  clearStories() {
    this._StoryService.clearStories();
  }

  // Clear the sprint
  clearSprints() {
    this._StoryService.clearSprints();
  }
}
