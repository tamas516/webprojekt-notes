import React, { FC } from "react";
import { Note, NoteItem } from "./pages/note-list-page/types";
import { Checkbox, Flex, FormControl, Icon, IconButton, Input, Text } from "@chakra-ui/react";

export interface TodoItemProps{
    item: NoteItem
}

export const TodoItem: FC<TodoItemProps> = ({item}) => {
    
    return (
        <Flex>
            <Checkbox>
                <Text as="h4">{item.label}</Text>
            </Checkbox>
        </Flex>
       
    )
};