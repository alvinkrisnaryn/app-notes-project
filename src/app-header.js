class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
              header {
                  background-color: #4CAF50;
                  color: white;
                  padding: 1rem;
                  text-align: center;
                  width: 100%;
                  position: fixed;
                  top: 0;
                  left: 0;
                  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                  font-size: 1.5rem;
                }
          </style>
          <header>
            <h1>Bookshelf Notes App</h1>
          </header>
      `;
  }
}
customElements.define("app-header", AppHeader);
