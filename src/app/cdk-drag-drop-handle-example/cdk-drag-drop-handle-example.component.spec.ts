import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropHandleExampleComponent } from './cdk-drag-drop-handle-example.component';

describe('CdkDragDropHandleExampleComponent', () => {
  let component: CdkDragDropHandleExampleComponent;
  let fixture: ComponentFixture<CdkDragDropHandleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkDragDropHandleExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CdkDragDropHandleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
