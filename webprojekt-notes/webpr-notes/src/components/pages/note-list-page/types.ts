import { type } from "os";
import React from "react";

export interface NoteItem {
    id: string;
    label: string
    isDone: boolean;
}

 export enum NoteColor {
    YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  RED = "red",
}

export interface Note {
    title: string;
    color: NoteColor;
    items: NoteItem[];
    creationDate: number;
}