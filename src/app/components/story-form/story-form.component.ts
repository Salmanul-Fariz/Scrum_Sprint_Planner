import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoryService } from '../../service/story.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.scss',
})
export class StoryFormComponent implements OnInit {
  StoryFormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private _StoryService: StoryService
  ) {}

  ngOnInit() {
    this.StoryFormData = this.builder.group({
      storyTitle: ['', Validators.required],
      storyPoint: ['', Validators.required],
    });
  }

  // Submit the Sprint Form
  createStory() {
    if (this.StoryFormData.invalid) {
      return;
    }

    const { storyTitle, storyPoint } = this.StoryFormData.controls;

    // Create the object of data to store
    const object = {
      name: storyTitle.value,
      points: storyPoint.value,
    };

    this._StoryService.addStory(object);

    this.StoryFormData.reset();
  }
}
