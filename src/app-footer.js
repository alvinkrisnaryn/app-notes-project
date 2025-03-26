class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
               footer {
                    background-color: #333;
                    color: white;
                    padding: 1rem;
                    text-align: center;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    font-size: 1rem;
                }
          </style>
          <footer>&copy; 2025 Bookshelf Notes</footer>
      `;
  }
}
customElements.define("app-footer", AppFooter);
