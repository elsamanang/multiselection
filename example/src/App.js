import React, {Component} from 'react';
import MultiSelection from 'multiselection'
import 'multiselection/dist/index.css'

class App extends Component {
  state = {
    text: ["Create 😄", "React 😄", "Library 😄", "Example 😄"],
    retour: [],
    retour1: []
  }

  handleValue = (retour) => {
    this.setState({retour})
  }

  handleValue1 = (retour1) => {
    this.setState({retour1})
  }

  render() {
    const {text, retour} = this.state;
    return (
      <>
        <div className='container row'>
          <div className='col-12'>
            <MultiSelection width={400} data={text} handleValue={this.handleValue} border={'solid 2px red'} margin={'15%'}/>
            <ul>
              <h4>Result of selection </h4>
              { retour.map(item => 
                  <li key={item}>{item}</li>
                )}
            </ul>
          </div>
        </div>
        
        
      </>
    )
    

  }
}

export default App
