import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import { Note, NoteColor, NoteItem } from './pages/note-list-page/types';
import { Box, Flex, Text } from "@chakra-ui/react"
import { NoteTitle } from './notes-title';
import { TodoList } from './todo-list';

const Fetching: FC = () => {
    const [ notes, setNotes ] = useState<Note>();

    useEffect(() => {
       axios.get("/note")
       .then(res => {
        setNotes(res.data.note)
       });
    }, []);
    
    if(!notes)
    {
        return null;
    }

    return (
        <Flex justifyContent="center">
            <Box backgroundColor={notes.color} maxW="sm">
                <NoteTitle title={notes.title}/>
                <TodoList items={notes.items} />
            </Box>
        </Flex>
        
        )
};

export default Fetching