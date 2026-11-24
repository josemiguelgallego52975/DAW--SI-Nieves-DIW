class SaludoPersonal extends HTMLElement {
  static get observedAttributes() {
    return ['nombre', 'color'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        p {
          font-size: 1.2rem;
          font-weight: bold;
          color: inherit;
        }
      </style>
      <p id="mensaje"></p>
    `;

    this._mensaje = this.shadowRoot.getElementById('mensaje');
  }

  get nombre() {
    return this.getAttribute('nombre') || 'desconocido';
  }

  set nombre(valor) {
    this.setAttribute('nombre', valor);
  }

  get color() {
    return this.getAttribute('color') || 'inherit';
  }

  set color(valor) {
    this.setAttribute('color', valor);
  }

  connectedCallback() {
    this._pintar();
  }

  attributeChangedCallback(atributo, valorViejo, valorNuevo) {
    this._pintar();
  }

  _pintar() {
    this._mensaje.textContent = `Hola, ${this.nombre}`;
    this._mensaje.style.color = this.color;
  }
}

customElements.define('saludo-personal', SaludoPersonal);

document.getElementById('btn-cambiar').addEventListener('click', () => {
  const saludo = document.getElementById('dinamico');
  saludo.setAttribute('nombre', 'Ibai');
});