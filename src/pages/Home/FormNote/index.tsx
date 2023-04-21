import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useState,
} from "react";
import Button from "../../../components/Button";
import { Note } from "../../../services/notes/types";
import Checkbox from "../../../components/Checkbox";
import { Form } from "./styles";

export interface FormValueState {
  id: number;
  text: string;
  date: Date;
  urgent: boolean; 
}

interface FormNoteProps {
  note?: Note;
  handleSubmit: (payload: FormValueState) => void;
}

function FormNote({ note, handleSubmit }: FormNoteProps) {
  const [formValues, setFormValues] = useState<FormValueState>({
    id: note?.id || 0,
    text: note?.text || "",
    date: note?.date || new Date(),
    urgent: note?.urgent || false,
  });

  const handleChangeUrgent = useCallback(() => {
    setFormValues((prevState) => ({ ...prevState, urgent: !prevState.urgent }));
  }, [setFormValues]);

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setFormValues({ ...formValues, text: event.target.value });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <Form onSubmit={onSubmit}>
      <textarea
        value={formValues.text}
        onChange={handleInput}
        autoFocus
        placeholder="Insira o texto da nota"
      />
      <Checkbox
        checked={formValues.urgent}
        handleChange={handleChangeUrgent}
        label="Urgente?"
      />
      <Button handleClick={() => {}}>Salvar</Button>
    </Form>
  );
}

export default FormNote;
