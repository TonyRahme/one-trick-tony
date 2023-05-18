import { Component, ElementRef, ViewChild } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-dungeon-canvas',
  templateUrl: './dungeon-canvas.component.html',
  styleUrls: ['./dungeon-canvas.component.scss']
})
export class DungeonCanvasComponent {

  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(){

    const stage = new Konva.Stage({
      container: this.container.nativeElement,
      width: 400,
      height: 300,
    });
    
    const layer = new Konva.Layer();

    const rect = new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 50,
      fill: 'blue',
      draggable: true,
    });

    rect.on('dragmove', () => {
      console.log(`New position: (${rect.x()}, ${rect.y()})`);
    });

    layer.add(rect);
    stage.add(layer);
  }
}
