import React, { Component } from 'react';

import {Button} from './button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,

    }

  }

  
  handleCount1(value, count) {
    console.log(value)
    console.log(count)
    this.setState((prevState) => ({ 
      count1: prevState.count1 + value
     }));
  }
  handleCount2(value) {
    this.setState((prevState) => ({ 
      count2: prevState.count2 + value
     }));
  } handleCount3(value) {
    this.setState((prevState) => ({ 
      count3: prevState.count3 + value

     }));
  } handleCount4(value) {
    this.setState((prevState) => ({ 
      count4: prevState.count4 + value
     }));
  } handleCount5(value) {
    this.setState((prevState) => ({ 
      count5: prevState.count5 + value
     }));
  }
  render() {
    return (
      <div>
        <div>
        Current count 1: {this.state.count1}
        <hr />
        <Button sign="+" count={this.state.count1} updateCount={this.handleCount1.bind(this)} />
        <Button sign="-" count={this.state.count1} updateCount={this.handleCount1.bind(this)} />
        </div>
        <div>
        Current count 2: {this.state.count2}
        <hr />
        <Button sign="+" count={this.state.count2} updateCount={this.handleCount2.bind(this)} />
        <Button sign="-" count={this.state.count2} updateCount={this.handleCount2.bind(this)} />
        </div>
        <div>
        Current count 3: {this.state.count3}
        <hr />
        <Button sign="+" count={this.state.count3} updateCount={this.handleCount3.bind(this)} />
        <Button sign="-" count={this.state.count3} updateCount={this.handleCount3.bind(this)} />
        </div>
        <div>
        Current count 4: {this.state.count4}
        <hr />
        <Button sign="+" count={this.state.count4} updateCount={this.handleCount4.bind(this)} />
        <Button sign="-" count={this.state.count4} updateCount={this.handleCount4.bind(this)} />
        </div>
        <div>
        Current count 5: {this.state.count5}
        <hr />
        <Button sign="+" count={this.state.count5} updateCount={this.handleCount5.bind(this)} />
        <Button sign="-" count={this.state.count5} updateCount={this.handleCount5.bind(this)} />
        </div>
        <div>
          Total Sum : {this.state.count1 + this.state.count2+ this.state.count3+ this.state.count4+ this.state.count5}
        </div>
        <div>
          Average : {(this.state.count1 + this.state.count2+ this.state.count3+ this.state.count4+ this.state.count5)/5}
        </div>
        <div>
          Max : {Math.max(this.state.count1, this.state.count2, this.state.count3,this.state.count4,this.state.count5)}
        </div>
        <div>
          Min : {Math.min(this.state.count1, this.state.count2, this.state.count3,this.state.count4,this.state.count5)}
        </div>
      </div>
    );
  }
}

export default App;
