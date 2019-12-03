import { TjComponentsModule } from './tj-components.module';

describe('TjComponentsModule', () => {
  let tjComponentsModule: TjComponentsModule;

  beforeEach(() => {
    tjComponentsModule = new TjComponentsModule();
  });

  it('should create an instance', () => {
    expect(tjComponentsModule).toBeTruthy();
  });
});
