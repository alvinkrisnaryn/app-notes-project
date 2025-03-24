import "./note-item.js";

class NoteList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set notes(notes) {
    this._notes = notes;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this._notes) return;

    this.shadowRoot.innerHTML = `
      <style>
        .note-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          padding: 0;
          list-style: none;
        }
      </style>
      <div class="note-list"></div>
    `;

    const notesContainer = this.shadowRoot.querySelector(".note-list");
    this._notes.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.noteData = note;
      notesContainer.appendChild(noteItem);
    });
  }
}

customElements.define("note-list", NoteList);
