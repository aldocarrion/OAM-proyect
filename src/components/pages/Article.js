import React from "react";
import { Consumer } from "../../contexts/context";

// class Article extends Component {
//   render() {
//     return (
//       <div className="container ">
//         <h1>Title of News Article </h1>
//         <img src="" alt=""></img>
//         <p>
//           This is the body of the article. "At vero eos et accusamus et iusto
//           odio dignissimos ducimus qui blanditiis praesentium voluptatum
//           deleniti atque corrupti quos dolores et quas molestias excepturi sint
//           occaecati cupiditate non provident, similique sunt in culpa qui
//           officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
//           harum quidem rerum facilis est et expedita distinctio. Nam libero
//           tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
//           minus id quod maxime placeat facere possimus, omnis voluptas assumenda
//           est, omnis dolor repellendus. Temporibus autem quibusdam et aut
//           officiis debitis aut rerum necessitatibus saepe eveniet ut et
//           voluptates repudiandae sint et molestiae non recusandae. Itaque earum
//           rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
//           maiores alias consequatur aut perferendis doloribus asperiores
//           repellat."
//         </p>
//       </div>
//     );
//   }
// }

// export default Article;

export default (props) => {
  return (
    <div className="container">
      <h1>Title of News Article {props.match.params.key} </h1>
      <Consumer>
        {(value) => {
          const { news } = value;
          const tester = props.match.params.key;
          return (
            <div>
              {news.map((item) => (
                <div key={item.key.toString()}>
                  <div>
                    {/* {item.tag}, {tester}, {item.key.toString()} */}
                    {item.key.toString() === tester ? (
                      <div>
                        <img src="" alt=""></img>
                        <p>{item.body}</p>
                      </div>
                    ) : (
                      <div/>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    </div>
  );
};
