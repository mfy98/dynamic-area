import { Directive, HostListener } from '@angular/core';
import { SVGService } from './svg.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
    private draggingElement: any;
    
    @HostListener('drop', ['$event'])
    onDrop(event: DragEvent) {
      event.preventDefault();
      const dropzone = event.target;
      const droppedElementId = event.dataTransfer.getData('text');
      const droppedElement = document.getElementById(droppedElementId);
  
      if (dropzone && droppedElement) {
        dropzone.appendChild(droppedElement);
      }
    }
}