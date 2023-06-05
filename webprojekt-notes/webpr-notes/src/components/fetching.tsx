import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import { Note, NoteColor, NoteItem } from './pages/note-list-page/types';
import { Text } from "@chakra-ui/react"

const Fetching: FC = () => {
    const [ notes, setNotes ] = useState<Note>();

    useEffect(() => {
       axios.get("/note")
       .then(res => {
        setNotes(res.data)
       });
    }, []);
    

    return (
        <Text as="h2">{JSON.stringify(notes)}</Text>
    )
};

export default Fetching