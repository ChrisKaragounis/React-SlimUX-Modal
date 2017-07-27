import React from "react";
import {render} from "react-dom";
import ModalBox from "./Components/Modal"
import './Components/Modal.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: true
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({
          isModalOpen: !this.state.isModalOpen
        })}>
          Clickme
        </button>
        <ModalBox OnClickOutside={()=>this.setState({isModalOpen:false})} isOpen={this.state.isModalOpen}>
          <p>Some text in the Modal..</p>
        </ModalBox>
      </div>
    );
  }
}
render(
  <App/>, document.getElementById('root'));
