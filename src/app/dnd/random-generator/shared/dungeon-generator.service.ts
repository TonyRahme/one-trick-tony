import { Injectable } from '@angular/core';
import { ExitEntity, RoomEntity } from './dungeon.model';

@Injectable({
  providedIn: 'root'
})
export class DungeonGeneratorService {
  private dungeonMap: Map<string, RoomEntity> = new Map();
  private exitMap: Map<string, ExitEntity> = new Map();
  
  
  private readonly MAX_DUNGEON_SIZE = 50;
  private exitQueue: string[] = [];
  private exitCount: number = 0;
  private exitsRegex = /(s?[A-Z])|((\d{1,}w?)|[a-z][A-Z])/g
  private chamberRegex = /C[corst]?[nl]?\d{2}(x\d{2})*/g;
  private EntitySplitRegex = /[CDPS][corst]?[ln]?|\d{2}w?(x\d{2})*/g
  private startingArea: RoomEntity;
  
  constructor() { }

  getDungeonMap(): Map<string,RoomEntity> {
    return this.dungeonMap;
  }

  
  getExits(): Map<string,ExitEntity> {
    return this.exitMap;
  }
}
