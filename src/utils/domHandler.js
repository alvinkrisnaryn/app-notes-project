import Api from "./api";

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

      if (notes.length === 0) {
        document.getElementById("notes-list").innerHTML =
          "<p>📂 Tidak ada catatan.</p>";
        return;
      }

      notes.forEach((note) => {
        const noteItem = document.createElement("div");
        noteItem.classList.add("note-item");
        noteItem.innerHTML = `
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <button class="delete-btn" data-id="${note.id}">Hapus</button>
        `;
        document.getElementById("notes-list").appendChild(noteItem);
      });

      document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", async (event) => {
          const noteId = event.target.dataset.id;
          await Api.deleteNote(noteId);
          await this.renderNotes();
        });
      });
    } catch (error) {
      document.getElementById("notes-list").innerHTML =
        "<p>❌ Gagal memuat catatan.</p>";
    }
  },
};

export default NotesUI;
