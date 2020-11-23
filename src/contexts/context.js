import React, { Component } from "react";
import background from "../img/background-00.jpg";
import background2 from "../img/background-01.jpg";
import profileimage from "../img/descarga.jpg";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type){
    case 'ADD_USER':
      return{
        ...state,
        users: [action.payload, ...state.users]

      };
      default:
        return state;
  }
}

export class Provider extends Component {
  state = {
    news: [
      {
        key: 1,
        tag: "Chile",
        title: "Titulo 1",
        date: "01.01.2020",
        bodyres:
          "Lineas de texto. Comienzo de noticia elaborada de Chile v1.",
        body:
          "Lineas de texto. Comienzo de noticia elaborada de Chile v1." +
          "This is the body of the article. At vero eos et accusamus et" +
          "iusto odio dignissimos ducimus qui blanditiis praesentium" +
          "voluptatum deleniti atque corrupti quos dolores et quas" +
          "molestias excepturi sint occaecati cupiditate non provident," +
          "similique sunt in culpa qui officia deserunt mollitia animi," +
          "id est laborum et dolorum fuga. Et harum quidem rerum" +
          "facilis est et expedita distinctio. Nam libero tempore, cum" +
          "soluta nobis est eligendi optio cumque nihil impedit quo" +
          "minus id quod maxime placeat facere possimus, omnis voluptas" +
          "assumenda est, omnis dolor repellendus. Temporibus autem" +
          "quibusdam et aut officiis debitis aut rerum necessitatibus" +
          "saepe eveniet ut et voluptates repudiandae sint et molestiae" +
          "non recusandae. Itaque earum rerum hic tenetur a sapiente" +
          "delectus, ut aut reiciendis voluptatibus maiores alias" +
          "consequatur aut perferendis doloribus asperiores repellat",
        link: "/testNews1",
        image: null,
      },
      {
        key: 2,
        tag: "Russia",
        title: "Titulo 2",
        date: "02.02.2020",
        bodyres:
          "Lineas de texto. Comienzo de noticia elaborada de Chile v2.",
        body:
          "Lineas de texto. Comienzo de noticia elaborada de Chile v2." +
          "This is the body of the article. At vero eos et accusamus et" +
          "iusto odio dignissimos ducimus qui blanditiis praesentium" +
          "voluptatum deleniti atque corrupti quos dolores et quas" +
          "molestias excepturi sint occaecati cupiditate non provident," +
          "similique sunt in culpa qui officia deserunt mollitia animi," +
          "id est laborum et dolorum fuga. Et harum quidem rerum" +
          "facilis est et expedita distinctio. Nam libero tempore, cum" +
          "soluta nobis est eligendi optio cumque nihil impedit quo" +
          "minus id quod maxime placeat facere possimus, omnis voluptas" +
          "assumenda est, omnis dolor repellendus. Temporibus autem" +
          "quibusdam et aut officiis debitis aut rerum necessitatibus" +
          "saepe eveniet ut et voluptates repudiandae sint et molestiae" +
          "non recusandae. Itaque earum rerum hic tenetur a sapiente" +
          "delectus, ut aut reiciendis voluptatibus maiores alias" +
          "consequatur aut perferendis doloribus asperiores repellat",
        link: "/testNews2",
        image: null,
      },
      {
        key: 3,
        tag: "Argentina",
        title: "Titulo 3",
        date: "03.03.2020",
        bodyres:
          "Lineas de texto. Comienzo de noticia elaborada de Chile v3.",
        body:
          "Lineas de texto. Comienzo de noticia elaborada de Chile v3." +
          "This is the body of the article. At vero eos et accusamus et" +
          "iusto odio dignissimos ducimus qui blanditiis praesentium" +
          "voluptatum deleniti atque corrupti quos dolores et quas" +
          "molestias excepturi sint occaecati cupiditate non provident," +
          "similique sunt in culpa qui officia deserunt mollitia animi," +
          "id est laborum et dolorum fuga. Et harum quidem rerum" +
          "facilis est et expedita distinctio. Nam libero tempore, cum" +
          "soluta nobis est eligendi optio cumque nihil impedit quo" +
          "minus id quod maxime placeat facere possimus, omnis voluptas" +
          "assumenda est, omnis dolor repellendus. Temporibus autem" +
          "quibusdam et aut officiis debitis aut rerum necessitatibus" +
          "saepe eveniet ut et voluptates repudiandae sint et molestiae" +
          "non recusandae. Itaque earum rerum hic tenetur a sapiente" +
          "delectus, ut aut reiciendis voluptatibus maiores alias" +
          "consequatur aut perferendis doloribus asperiores repellat",
        link: "/testNews3",
        image: null,
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
        head: "Perfiles",
        headlink: "/profile",
      },
      {
        key: 5,
        head: "Registro de Usuario",
        headlink: "/addUser",
      },
      {
        key: 6,
        head: "Editar Usuario",
        headlink: "/editUser",
      },
    ],
    carousel: [
      {
        key: 1,
        image: { background },
        title: "Title 1",
        body: "Body 1",
        btn: "btn 1",
        url: "url_1",
      },
      {
        key: 2,
        image: { background2 },
        title: "Title 2",
        body: "Body 2",
        btn: "btn 2",
        url: "url_2",
      },
      {
        key: 3,
        image: { profileimage },
        title: "Title 3",
        body: "Body 3",
        btn: "btn 3",
        url: "url_3",
      },
    ],
    
    
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }

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
