import NotesUI from "./utils/domHandler";
import Api from "./utils/api";
import "./styles/style.css";


document.addEventListener("DOMContentLoaded", async () => {
  await NotesUI.renderNotes(); // Memuat catatan saat aplikasi dijalankan
});

document
  .getElementById("note-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const titleInput = document.getElementById("title");
    const bodyInput = document.getElementById("body");
    const title = titleInput.value;
    const body = bodyInput.value;

    if (title && body) {
      NotesUI.showLoading();

      try {
        await Api.addNote(title, body);
        titleInput.value = "";
        bodyInput.value = "";
        await NotesUI.renderNotes();
      } catch (error) {
        console.error("Gagal menambahkan catatan:", error);
      } finally {
        NotesUI.hideLoading();
      }
    }
  });

document
  .getElementById("notes-list")
  .addEventListener("click", async (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const noteId = event.target.dataset.id;

      if (confirm("Apakah Anda yakin ingin menghapus catatan ini?")) {
        NotesUI.showLoading();

        try {
          await Api.deleteNote(noteId);
          await NotesUI.renderNotes();
        } catch (error) {
          console.error("Gagal menghapus catatan:", error);
        } finally {
          NotesUI.hideLoading();
        }
      }
    }
  });
