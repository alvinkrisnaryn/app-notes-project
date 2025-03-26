import NotesUI from "./utils/domHandler.js";
import Api from "./utils/api.js";
import "./styles/style.css";
import "./components/note-item.js";
import "./components/note-list.js";
import "./components/note-form.js";

document.addEventListener("DOMContentLoaded", async () => {
  await NotesUI.renderNotes();
});

// Tangani event tambah catatan dari NoteForm
document.body.addEventListener("add-note", async (event) => {
  const { title, body } = event.detail;

  if (title && body) {
    NotesUI.showLoading();

    try {
      await Api.addNote(title, body);
      window.location.reload();
      await NotesUI.renderNotes();
    } catch (error) {
      console.error("Gagal menambahkan catatan:", error);
    } finally {
      NotesUI.hideLoading();
    }
  }
});

// Tangani event hapus catatan dari NoteItem
document
  .getElementById("notes-list")
  .addEventListener("delete-note", async (event) => {
    const noteId = event.detail;

    if (confirm("Apakah Anda yakin ingin menghapus catatan ini?")) {
      NotesUI.showLoading();

      try {
        console.log(`Deleting note with ID: ${noteId}`);
        const deleteMessage = await Api.deleteNote(noteId);
        console.log(deleteMessage);

        await NotesUI.renderNotes();
      } catch (error) {
        console.error("Gagal menghapus catatan:", error);
      } finally {
        NotesUI.hideLoading();
      }
    }
  });
