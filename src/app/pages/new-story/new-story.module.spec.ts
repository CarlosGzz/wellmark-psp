import { NewStoryModule } from './new-story.module';

describe('NewStoryModule', () => {
  let newStoryModule: NewStoryModule;

  beforeEach(() => {
    newStoryModule = new NewStoryModule();
  });

  it('should create an instance', () => {
    expect(newStoryModule).toBeTruthy();
  });
});
