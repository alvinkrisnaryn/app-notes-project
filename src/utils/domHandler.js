import Api from "./api.js";
import "../components/note-item.js";
import "../components/note-list.js";

const NotesUI = {
  showLoading() {
    const notesContainer = document.getElementById("notes-list");
    notesContainer.innerHTML = "<p>⏳ Memuat catatan...</p>";
  },

  hideLoading() {
    const notesContainer = document.getElementById("notes-list");
    notesContainer.innerHTML = "";
  },

  async renderNotes() {
    this.showLoading();

    try {
      const notes = await Api.getNotes();
      this.hideLoading();

      const notesContainer = document.getElementById("notes-list");
      notesContainer.innerHTML = "";

      if (notes.length === 0) {
        notesContainer.innerHTML = "<p>📂 Tidak ada catatan.</p>";
        return;
      }

      const noteList = document.createElement("note-list");
      noteList.notes = notes;
      notesContainer.appendChild(noteList);
    } catch (error) {
      document.getElementById("notes-list").innerHTML =
        "<p>❌ Gagal memuat catatan.</p>";
    }
  },
};

export default NotesUI;
