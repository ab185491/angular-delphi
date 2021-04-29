import { TestBed } from '@angular/core/testing';

import { DelphiService } from './delphi.service';

describe('DelphiService', () => {
  let service: DelphiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelphiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
