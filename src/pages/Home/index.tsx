import { useCallback, useContext, useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote, { FormValueState } from "./FormNote";
import Modal from "../../components/Modal";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import { Container } from "./styles";
import { Context } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

function Home() {
  const { handleLogout, authenticated } = useContext(Context);
  const [notes, setNotes] = useState<Note[]>([] as Note[]);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editNoteItem, setEditNoteItem] = useState<Note>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await NotesService.getNotes();
      setNotes(response.data);
      setLoading(false);
    })();
  }, []);

  const createNote = useCallback(
    (payload: FormValueState) => {
      (async () => {
        setShowModal(false);
        setLoading(true);
        const response = await NotesService.postNotes(payload);
        setNotes([...notes, response.data]);
        setLoading(false);
      })();
    },
    [notes]
  );
  
  const updateNote = useCallback((payload: FormValueState) => {
      (async () => {
        setShowModalEdit(false);
        setLoading(true);
        await NotesService.alterNote(payload);
        setLoading(false);
        selectNote(payload.id);
      })();
    },
    [notes]
  );

  const selectNote = useCallback((id: number) => {
      (async () => {
        setLoading(true);
        const response = await NotesService.getNote({id});

        let index = notes.findIndex(nota => {
          return nota.id === response.data.id;
        });

        notes.splice(index, 1, response.data);
        setNotes(notes);
        setLoading(false);
      })();
    },
    [notes]
  );

  const deleteNote = useCallback((id: number) => {
    if(window.confirm("Deseja mesmo excluir a nota " + id + "?")) {     
      (async () => {
        setLoading(true);
        await NotesService.deleteNote({ id });
        setNotes((prevState) => prevState.filter((note) => note.id !== id));
        setLoading(false);
      })();
    }
  }, [notes]);

  const editNote = useCallback((id: number) => {
    setShowModalEdit(true);
    setEditNoteItem(notes.filter(x => x.id === id)[0]);
  }, [notes]);

  const prioritizeNotes = useCallback(() => {
    notes.sort((a: Note, b: Note) => (a.urgent < b.urgent) ? 1 : -1);
    setNotes([...notes]);
  }, [notes]);

  useEffect(() => {
    if (!authenticated) navigate("/");
  }, [authenticated]);

  return (
    <>
      {loading && <Loading />}
      {showModal && (
        <Modal
          title="Nova nota"
          handleClose={() => setShowModal(false)}
          style={{ width: "100px" }}
        >
          <FormNote handleSubmit={createNote} />
        </Modal>
      )}
      {showModalEdit && (
        <Modal
          title="Alterar nota"
          handleClose={() => setShowModalEdit(false)}
          style={{ width: "100px" }}
        >
          <FormNote note={editNoteItem} handleSubmit={updateNote} />
        </Modal>
      )}
      <Container>
        {notes.map((note) => (
          <CardNote
            key={note.id}
            handleDelete={deleteNote}
            handleEdit={editNote}
            note={note}
          ></CardNote>
        ))}
        <FabButton position="left: 5px;" handleClick={() => setShowModal(true)}>
          +
        </FabButton>
        <FabButton position="left: 60px;" handleClick={prioritizeNotes}>
          !
        </FabButton>
        <FabButton position="right: 30px;" handleClick={handleLogout}>
          <span className="material-icons">logout</span>
        </FabButton>
      </Container>
    </>
  );
}

export default Home;
