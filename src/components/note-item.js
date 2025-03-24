class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set noteData(note) {
    this._note = note;
    this.render();
  }

  render() {
    if (!this._note) return;

    this.shadowRoot.innerHTML = `
      <style>
        .note {
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }
        .delete-btn {
          background-color: #ff4d4d;
          color: white;
          border: none;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 5px;
          align-self: flex-end;
          margin-top: 10px;
        }
        .delete-btn:hover {
          background-color: #cc0000;
        }
      </style>
      <div class="note">
        <h3>${this._note.title}</h3>
        <p>${this._note.body}</p>
        <button class="delete-btn" data-id="${this._note.id}">Hapus</button>
      </div>
    `;

    this.shadowRoot
      .querySelector(".delete-btn")
      .addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("delete-note", {
            detail: this._note.id,
            bubbles: true,
            composed: true,
          })
        );
      });
  }
}

customElements.define("note-item", NoteItem);
