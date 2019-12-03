import { UiComponentModule } from './ui-component.module';

describe('UiComponentModule', () => {
  let uiComponentModule: UiComponentModule;

  beforeEach(() => {
    uiComponentModule = new UiComponentModule();
  });

  it('should create an instance', () => {
    expect(uiComponentModule).toBeTruthy();
  });
});
