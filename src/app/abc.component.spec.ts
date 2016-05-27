import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AbcAppComponent } from '../app/abc.component';

beforeEachProviders(() => [AbcAppComponent]);

describe('App: Abc', () => {
  it('should create the app',
      inject([AbcAppComponent], (app: AbcAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'abc works!\'',
      inject([AbcAppComponent], (app: AbcAppComponent) => {
    expect(app.title).toEqual('abc works!');
  }));
});
