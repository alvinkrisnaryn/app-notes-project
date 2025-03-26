import NotesUI from "./utils/domHandler.js";
import Api from "./utils/api.js";
import "./styles/style.css";
import "./components/note-item.js";
import "./components/note-list.js";
import "./components/note-form.js";
import "./app-header.js";
import "./app-footer.js";

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

    try {
      console.log(`Deleting note with ID: ${noteId}`);
      const deleteMessage = await Api.deleteNote(noteId);
      console.log(deleteMessage);document.addEventListener("DOMContentLoaded", async () => {
  try {
    await NotesUI.renderNotes();
  } catch (error) {
    console.error("Gagal merender catatan:", error);
  }
});

// Tangani event tambah catatan dari NoteForm
document.body.addEventListener("add-note", async (event) => {
  const { title, body } = event.detail;

  if (title && body) {
    try {
      NotesUI.showLoading();
      await Api.addNote(title, body);
      window.location.reload();
      await NotesUI.renderNotes();
    } catch (error) {
      console.error("Gagal menambahkan catatan:", error);
    } finally {
      NotesUI.hideLoading();
    }
  } else {
    console.error("Judul dan isi catatan harus diisi.");
  }
});

// Tangani event hapus catatan dari NoteItem
document
  .getElementById("notes-list")
  .addEventListener("delete-note", async (event) => {
    const noteId = event.detail;

    if (noteId) {
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
    } else {
      console.error("ID catatan tidak ditemukan.");
    }
  });console.log("DOMContentLoaded event triggered");
console.log("Rendering notes...");
console.log("Adding event listener for add-note event");
console.log("Adding event listener for delete-note event");document.addEventListener("DOMContentLoaded", async () => {
  try {
    console.log("Rendering notes...");
    await NotesUI.renderNotes();
  } catch (error) {
    console.error("Gagal merender catatan:", error);
  }
});

document.body.addEventListener("add-note", async (event) => {
  const { title, body } = event.detail;

  if (title && body) {
    try {
      console.log("Adding new note...");
      NotesUI.showLoading();
      await Api.addNote(title, body);
      window.location.reload();
      await NotesUI.renderNotes();
    } catch (error) {
      console.error("Gagal menambahkan catatan:", error);
    } finally {
      NotesUI.hideLoading();
    }
  } else {
    console.error("Judul dan isi catatan harus diisi.");
  }
});

document
  .getElementById("notes-list")
  .addEventListener("delete-note", async (event) => {
    const noteId = event.detail;

    if (noteId) {
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
    } else {
      console.error("ID catatan tidak ditemukan.");
    }
  });
      await NotesUI.renderNotes();
    } catch (error) {
      console.error("Gagal menghapus catatan:", error);
    } finally {
      NotesUI.hideLoading();
    }
  });
