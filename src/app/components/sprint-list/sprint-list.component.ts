import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoryService } from '../../service/story.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrl: './sprint-list.component.scss',
})
export class SprintListComponent implements OnInit, OnDestroy {
  storiesData: { name: string; points: number }[] = [];
  storySubscribtion: Subscription;

  constructor(private _StoryService: StoryService) {}

  ngOnInit(): void {
    // Subcribe the data for list the stories
    this.storySubscribtion =
      this._StoryService.$SelectedStoryDataTransfer.subscribe((data) => {
        this.storiesData = data;
      });
  }

  // Unsubscribe the data for attenction from the data leackage
  ngOnDestroy(): void {
    if (this.storySubscribtion) this.storySubscribtion.unsubscribe();
  }
}
