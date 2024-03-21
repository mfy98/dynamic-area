import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';
import { SVGService } from './svg.service';

@NgModule({
  declarations: [AppComponent,DraggableDirective,DroppableDirective],
  imports: [BrowserModule, DragDropModule],
  bootstrap: [AppComponent],
  providers: [SVGService]
})
export class AppModule {}