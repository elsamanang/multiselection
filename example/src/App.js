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
    const {text, retour, retour1} = this.state;
    return (
      <>
        <div className='container row'>
          <div className='col-6'>
            <MultiSelection width={400} data={text} handleValue={this.handleValue} />
            <ul>
              <h4>Call with all props</h4>
              { retour.map(item => 
                  <li key={item}>{item}</li>
                )}
            </ul>
          </div>
          <div className='col-6'>
            <MultiSelection data={text} handleValue={this.handleValue1} />
            <ul>
              <h4>Call without width props</h4>
              { retour1.map(item => 
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
