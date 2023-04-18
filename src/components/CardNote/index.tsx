import { Note } from "../../services/notes/types";
import { formatDate } from "../../services/utils";
import { Container } from "./styles";
import {useState } from "react";

interface NoteProps {
  note: Note;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

function CardNote({ note, handleDelete, handleEdit }: NoteProps) {
  return (
    <>
      <Container urgent={note.urgent}>
        <p>#{note.id} - {formatDate(new Date(note?.date))}</p>
        <p>{note.text}</p>

        {note.urgent && (
            <span className="material-icons" id="priority">
              priority_high
            </span>            
        )} 

        <span className="material-icons" id="edit" onClick={() => handleEdit(note.id)}>
          {" "}
          edit
        </span>

        <span className="material-icons" id="delete" onClick={() => handleDelete(note.id)}>
          {" "}
          delete_forever{" "}
        </span>
      </Container>
    </>
  );
}

export default CardNote;
