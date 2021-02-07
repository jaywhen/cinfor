import Header from "./component/Header";
import React, {useState, useEffect} from 'react';

// class App extends Component {
//   state = {
//     data: [],
//   }

//   // Code is invoked after the component is mounted/inserted into the DOM tree.
//   componentDidMount() {
//     const url =
//       'http://localhost:8080/college/findAll'

//     fetch(url)
//       .then((result) => result.json())
//       .then((result) => {
//         this.setState({
//           data: result,
//         })
//       })
//   }

//   render() {
//     const {data} = this.state
    
//     const result = data.map((entry, index) => {
//       return (
//         <li key={index}>
//           <img src={entry.logo} width="80" alt="test" />
//           <a href={entry.homePage}>{entry.nameZh}</a>
//           <h6>{entry.nameShort}</h6>
//           <h6>{entry.address}</h6>
//         </li>
//       )
//     })
//     return (
//       <div>
//         <Header />
//         <ul>{result}</ul>
//       </div>
//     )
//   }
// }

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/college/findAll")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }, []);
  
  if(error) {
    return <div>Error: {error.message}</div>;
  } else if(!isLoaded) {
    return <div>Loading ... </div>;
  } else {
    return(
      <ul>
        {items.map(item => (
          <li key={item.collegeId}>
            {item.nameZh}
          </li>
        ))}
      </ul>
    );
  }
}

export default App
