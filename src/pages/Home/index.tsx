import { ChangeEvent, useCallback, useContext, useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import SearchSection from "../../components/SearchSection";
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
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    listNote();
  }, []);


  const listNote =  async () => {
    const response = await NotesService.getNotes();
    setNotes(response.data);
    setLoading(false);
  }

  const createNote = useCallback(
    (payload: FormValueState) => {
      (async () => {
        setLoading(true);
        const response = await NotesService.postNotes(payload);
        resetSearch();
        setShowModal(false);
      })();
    },
    [notes]
  );


  const resetSearch = async () => {
    setSearch("");
    const response = await NotesService.getNotes();
    setNotes([...response.data]) 
    setLoading(false);
  }

  const deleteNote = useCallback((id: number) => {
    if(window.confirm("Deseja mesmo excluir a nota " + id + "?")) {     
      (async () => {
        await NotesService.deleteNote({ id });
        setNotes((prevState) => prevState.filter((note) => note.id !== id));
      })();
    }
  }, [notes]);

  const prioritizeNotes = useCallback(() => {
    notes.sort((a: Note, b: Note) => (a.urgent < b.urgent) ? 1 : -1);
    setNotes([...notes]);
  }, [notes]);

  const filterNotes = useCallback(async (text: string) => {
    setLoading(true);
    const response = await NotesService.getNotes();
    setNotes([...response.data.filter((note: Note) =>  note.text.includes(text))]);
    setLoading(false);
  }, [notes]);

  useEffect(() => {
    if (!authenticated) navigate("/");
  }, [authenticated]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

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
      <SearchSection handleSearch={filterNotes} onTextChange={handleSearchChange} search={search}></SearchSection>
      <Container>
        {notes.map((note) => (
          <CardNote
            key={note.id}
            handleDelete={deleteNote}
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
