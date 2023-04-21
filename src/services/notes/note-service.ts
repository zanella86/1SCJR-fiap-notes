import { FormValueState } from "../../pages/Home/FormNote";
import { api } from "../api";
import { Note } from "./types";

export const NotesService = {
  getNotes: () => api.get<Note[]>("/notes"),
  postNotes: (payload: FormValueState) => api.post<Note>("/notes", payload),
  deleteNote: (payload: { id: number }) => api.delete(`/notes/${payload.id}`),
  alterNote: (payload: FormValueState) => api.put(`/notes/${payload.id}`, payload),
  getNote: (payload: { id: number }) => api.get<Note>(`/notes/${payload.id}`),
};
