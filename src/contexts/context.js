import React, { Component } from "react";
import background from "../img/background-00.jpg";
import background2 from "../img/background-01.jpg";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    news: [
      {
        key: 1,
        tag: "Chile",
        title: "Titulo 1",
        date: "01.01.2020",
        body:
          "Lineas de texto. Comienzo de noticia elaborada de GoldAnda Chile v1.",
        link: "/testNews1",
      },
      {
        key: 2,
        tag: "Chile",
        title: "Titulo 2",
        date: "02.02.2020",
        body:
          "Lineas de texto. Comienzo de noticia elaborada de GoldAnda Chile v2.",
        link: "/testNews2",
      },
      {
        key: 3,
        tag: "Chile",
        title: "Titulo 3",
        date: "03.03.2020",
        body:
          "Lineas de texto. Comienzo de noticia elaborada de GoldAnda Chile v3.",
        link: "/testNews3",
      },
    ],
    items: [
      {
        key: 1,
        head: "Sobre Nosotros",
        headlink: "/about",
        item1: "Perfil de la Compañía",
        item1link: "/perfil",
        item2: "Cultura Empresarial",
        item2link: "/cultura",
        item3: "Honor de Calificación",
        item3link: "/honor",
      },
      {
        key: 2,
        head: "Noticias",
        headlink: "/noticias",
        item1: "Noticias de la Compañía",
        item1link: "/noticias", //add filter
        item2: "Noticias de la Industria",
        item2link: "/noticias", //add filter
      },
      {
        key: 3,
        head: "Centro de Productos",
        headlink: "/centroproductos",
        item1: "Productos de exportacion",
        item1link: "/productos", //addfilter
        item2: "Productos Importados",
        item2link: "/productos", //addfilter
        item3: "Agricultores",
        item3link: "/agricultores",
      },
      {
        key: 4,
        head: "Red de Ventas",
        headlink: "/redventas",
      },
      {
        key: 5,
        head: "Trabaja con Nosotros",
        headlink: "/inscripcion",
      },
      {
        key: 6,
        head: "Contacto",
        headlink: "/contacto",
      },
    ],
    carousel: [
      {
        key: 1,
        image: { background },
        title: "Title 1",
        body: "Body 1",
        btn: "btn 1",
        url: "url 1",
      },
      {
        key: 2,
        image: { background2 },
        title: "Title 2",
        body: "Body 2",
        btn: "btn 2",
        url: "url 2",
      },
      {
        key: 3,
        image: "src 3",
        title: "Title 3",
        body: "Body 3",
        btn: "btn 3",
        url: "url 3",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
