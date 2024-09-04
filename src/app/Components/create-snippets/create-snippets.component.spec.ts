import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSnippetsComponent } from './create-snippets.component';

describe('CreateSnippetsComponent', () => {
  let component: CreateSnippetsComponent;
  let fixture: ComponentFixture<CreateSnippetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSnippetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSnippetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
