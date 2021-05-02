
import React from "react"
import "./App.css"
import getNumber from "./Logic"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', number: 0 }
  }
  myChangeHandler = (event) => {
    this.setState({ name: event.target.value, number: getNumber(event.target.value) })
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <form className="App">
            <p>Name: </p>
            <input className="App-bar"
              type='text'
              onChange={this.myChangeHandler}
            />
            <h3>Number:</h3>
            <h1>{this.state.number}</h1>
          </form>
        </header>
      </div>
    );
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
