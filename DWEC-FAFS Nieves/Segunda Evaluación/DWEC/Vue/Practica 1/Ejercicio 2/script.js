class TarjetaUsuario extends HTMLElement {
  static get observedAttributes() {
    return ['rol'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const plantilla = document.getElementById('plantilla-tarjeta');
    const contenido = plantilla.content.cloneNode(true);
    this.shadowRoot.appendChild(contenido);

    this._rolEl = this.shadowRoot.querySelector('.rol');
  }

  get rol() {
    return this.getAttribute('rol') || '';
  }

  set rol(valor) {
    this.setAttribute('rol', valor);
  }

  connectedCallback() {
    this._pintar();
  }

  attributeChangedCallback(atributo, valorViejo, valorNuevo) {
    this._pintar();
  }

  _pintar() {
    this._rolEl.textContent = this.rol;
  }
}

customElements.define('tarjeta-usuario', TarjetaUsuario);