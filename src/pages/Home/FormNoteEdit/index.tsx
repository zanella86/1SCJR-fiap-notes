import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import Button from "../../../components/Button";
import { Note } from "../../../services/notes/types";
import Checkbox from "../../../components/Checkbox";
import { Form } from "./styles";

export interface FormEditValueState {
  text: string;
  urgent: boolean;
}

interface FormNoteProps {
  note?: Note;
  handleSubmit: (payload: FormEditValueState) => void;
}

function FormEditNote({ note, handleSubmit }: FormNoteProps) {
  
  const [formValues, setFormValues] = useState<FormEditValueState>({
    text: note?.text || "",
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

export default FormEditNote;
