class ContadorClicks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: flex; align-items: center; gap: .5rem; margin: 1rem 0; }
        span { min-width: 3ch; text-align: center; font-size: 1.5rem; }
        button { font-size: 1.2rem; width: 2.5rem; cursor: pointer; }
        button:disabled { cursor: not-allowed; }
      </style>
      <button id="menos">-</button>
      <span id="valor"></span>
      <button id="mas">+</button>
    `;

    this._valorEl = this.shadowRoot.getElementById("valor");
    this._mas = this.shadowRoot.getElementById("mas");
    this._menos = this.shadowRoot.getElementById("menos");
    this._valor = 0;

    this._mas.addEventListener("click", () => this._cambiar(1));
    this._menos.addEventListener("click", () => this._cambiar(-1));
  }

  get max() {
    const valor = this.getAttribute("max");
    if (valor === null || valor.trim() === "" || isNaN(Number(valor))) {
      return Infinity;
    }
    return Number(valor);
  }

  connectedCallback() {
    const inicio = Number(this.getAttribute("inicio")) || 0;
    this._valor = Math.min(inicio, this.max);
    this._pintar();
  }

  _cambiar(paso) {
    const nuevo = this._valor + paso;

    if (nuevo > this.max) return;

    this._valor = nuevo;
    this._pintar();

    this.dispatchEvent(new CustomEvent("cambio", { detail: this._valor }));
  }

  _pintar() {
    this._valorEl.textContent = this._valor;
    this._mas.disabled = this._valor >= this.max;
  }
}

customElements.define("contador-clicks", ContadorClicks);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("contador-clicks").forEach((contador) => {
    contador.addEventListener("cambio", (e) => {
      console.log(`Contador #${contador.id} -> nuevo valor:`, e.detail);
    });
  });
});