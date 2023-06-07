import { Text } from "@chakra-ui/react";
import React, { FC } from "react";

export interface NoteTitleProps{
    title: string;
}

export const NoteTitle: FC<NoteTitleProps> = ({title}) => {
    return (
        <Text as="h2">{title}</Text>
    )
};