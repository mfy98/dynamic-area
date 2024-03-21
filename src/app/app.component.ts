import { DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component,ViewChild,ViewChildren,ElementRef, QueryList, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkDrag,CdkDragDrop,CdkDropList} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CdkDrag,DragDropModule,CdkDropList,MatCardModule, MatButtonModule],
  templateUrl: './app.component.html',
  standalone:true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  svgFiles: string[] = [];
  counter: number = 1;
  ngOnInit(): void {
    this.loadSvgFiles();
  }
  loadSvgFiles(){
    while(this.counter <=5){
    this.svgFiles.push(`assets/${this.counter+1}.svg`);
    this.counter+=1;
    }

  }

  todo = ['AAAA', 'BBBB', 'CCCC', 'DDDD','EEEE'];

  done = ['TTT','RRR','WWWW','QQQ','ZZZ'];

  getImagePath(item:string):string{
    return `../assets/${this.svgFiles.indexOf(item)+2}.svg`;
  }
  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log("Prev Container:"+event.previousContainer.data);
      console.log("Container:"+event.previousContainer.data);
      console.log("Prev Index:"+event.previousContainer.data);
      console.log("Current Index:"+event.previousContainer.data);
    }
  }
  /*
  @ViewChildren('exampleBox') drags!: QueryList<ElementRef>;
  @ViewChild('exampleBox2') dropped!: ElementRef;

  dragStart(event: DragEvent){
    console.log("drag start event");
    event.dataTransfer!.setData('text/plain', (event.target as HTMLElement).id);  
  }
  
  dragOver(event: DragEvent){
    event.preventDefault();
    console.log("drag over event");
  }

  drop(event: DragEvent){
    event.preventDefault();
    console.log("drop event");
    const data = event.dataTransfer!.getData('text');
    const draggedElement = document.getElementById(data);

    if((event.target as HTMLElement).id==='exampleBox2'){
      this.dropped.nativeElement.appendChild(draggedElement);
    }

  }
  */
  /*

  moveElement(event: CdkDragDrop<ElementRef[]>){
    this.dropped.nativeElement.innerHTML = '';
    this.drags.forEach(e=>{
      this.drop.nativeElement.appendChild(e.nativeElement);
    })
  }
  */
}


