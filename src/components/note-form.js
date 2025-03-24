class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .note-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 400px;
          margin: 0 auto;
          padding: 15px;
          background: white;
          border-radius: 8px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .note-form input,
        .note-form textarea {
          width: 95%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
        .note-form button {
          width: auto;
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }
        .note-form button:hover {
          background-color: #218838;
        }
      </style>
      <form class="note-form">
        <label>Judul:</label>
        <input type="text" id="title" placeholder="Judul Catatan" required />
        <label>Isi Catatan:</label>
        <textarea id="body" placeholder="Isi Catatan" rows="5" required></textarea>
        <button type="submit">Tambah Catatan</button>
      </form>
    `;

    this.shadowRoot
      .querySelector(".note-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const title = this.shadowRoot.querySelector("#title").value;
        const body = this.shadowRoot.querySelector("#body").value;
        this.dispatchEvent(
          new CustomEvent("add-note", {
            detail: { title, body },
            bubbles: true,
            composed: true,
          })
        );
        this.shadowRoot.querySelector(".note-form").reset();
      });
  }
}

customElements.define("note-form", NoteForm);
