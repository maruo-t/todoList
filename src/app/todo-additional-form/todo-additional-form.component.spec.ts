import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAdditionalFormComponent } from './todo-additional-form.component';

describe('TodoAdditionalFormComponent', () => {
  let component: TodoAdditionalFormComponent;
  let fixture: ComponentFixture<TodoAdditionalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAdditionalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAdditionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
