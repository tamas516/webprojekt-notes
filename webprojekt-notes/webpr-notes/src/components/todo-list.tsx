import React, { FC } from "react";
import { NoteItem } from "./pages/note-list-page/types";
import { Text } from "@chakra-ui/react";
import { TodoItem } from "./todo-item";

export interface TodoListProps{
    items: NoteItem[];
}

export const TodoList: FC<TodoListProps> = ({items}) => {
    return (
        <Text as="h2">
            {items.map((item) => (
                <TodoItem item={item} />
            ))}
        </Text>
    )
};