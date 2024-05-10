import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  $StoryDataTransfer = new EventEmitter<{ name: string; points: number }[]>();
  $SelectedStoryDataTransfer = new EventEmitter<
    { name: string; points: number }[]
  >();

  stories: { name: string; points: number }[] = [];
  selectedStories: { name: string; points: number }[] = [];

  constructor() {}

  addStory(story: { name: string; points: number }) {
    // Implement logic to prevent duplicate stories
    const index = this.stories.findIndex((e) => e.name === story.name);

    if (index === -1) {
      this.stories.push(story);

      this.$StoryDataTransfer.emit(this.stories);
    }
  }

  autoSelectStories(point: number) {
    let result: any[] = [];
    const length = this.stories.length;
    const array = this.stories;

    // Find the Combiations by backtrack
    function backtrack(
      start: number,
      currentCombination: { name: string; points: number }[],
      currentSum: number
    ) {
      if (currentSum < point) {
        result.push([...currentCombination]);
      }

      for (let i = start; i < length; i++) {
        if (currentSum + array[i].points < point) {
          currentCombination.push(array[i]);

          backtrack(i + 1, currentCombination, currentSum + array[i].points);

          currentCombination.pop();
        }
      }
    }

    backtrack(0, [], 0);

    // Remove the emty data from First
    result.shift();

    console.log(result);
    // Select a combination
    const randomNumber = Math.floor(Math.random() * result.length);

    this.selectedStories = result[randomNumber];

    console.log(randomNumber, this.selectedStories);

    this.$SelectedStoryDataTransfer.emit(this.selectedStories);
  }

  getStories() {
    return this.stories;
  }

  clearStories() {
    this.stories = [];

    this.$StoryDataTransfer.emit(this.stories);
  }

  clearSprints() {
    this.selectedStories = [];

    this.$SelectedStoryDataTransfer.emit(this.selectedStories);
  }
}
