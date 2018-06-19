import React from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { store } from './index'; // прикольно что index импортирует App
import addTask from './actions';

class App extends React.Component {
  
    constructor() {
      super();
      this.state = { val: 'wat'};
      this.checkBoxex = [];
      
    }
    onchange({target}){
      this.setState(val: target.value)
    }
    addTask() {
      store.dispatch(addTask(this.state.val));
  }
  render() {
    return (
      <div>
        <input onChange={::this.onchange} defaultValue={this.state.val}  />
        <button onClick={::this.addTask}>Добавить</button>
        <ul>{this.props.list.map(v => 
              <li key={uuidv4()}>
              <input key={uuidv4()} type="checkbox" />{v}
              </li>
              )
            }
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  list: state.list,
}))(App);
