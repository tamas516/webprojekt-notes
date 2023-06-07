import React, { FC } from "react";
import { Note, NoteItem } from "./pages/note-list-page/types";
import { Text } from "@chakra-ui/react";

export interface TodoItemProps{
    item: NoteItem
}

export const TodoItem: FC<TodoItemProps> = ({item}) => {
    return (
        <Text as="h4">{item.label}</Text>
    )
};