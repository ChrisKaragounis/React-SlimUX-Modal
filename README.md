# React-SlimUX-Modal
Easy to use modal dialog for React

## Table of Contents
* [Installation](#installation)
* [API documentation](#api-documentation)
* [Usage](#usage)
* [Example](#example)
* [Preview](#preview)

## Installation
Copy the files in the Components folder to your project and then import ModalBox to your React page, like this

```jsx
import ModalBox from "./Components/Modal"
```
yarn and npm support comming soon.

## API documentation
Properties: 
isOpen : Becomes visible or hides based on it's value. True means visible otherwise it hides.

OnClickOutside : Defines what happens if user clicks outside the modal while isOpen equals true

## Usage
This modal was created as a lite alternative to all the other bloated modal components available for react. It is simple, with one purpose and easy to use.
By default it has no contents at all. The content is up to you to decide. In the * [Preview] section you can see one example of it.


## Example

```jsx
import React from "react";
import {render} from "react-dom";
import ModalBox from "./Components/Modal"

 Class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: true
    }
  }
  render() {
    return (
        <div>
            <img src={page} alt="Our Cat Lord" />
        <button
          onClick={() => this.setState({
          isModalOpen: !this.state.isModalOpen
        })}>
          Clickme
        </button>
        <ModalBox OnClickOutside={()=>this.setState({isModalOpen:false})} isOpen={this.state.isModalOpen}>
                <div>
                    Content goes here
                </div>
        </ModalBox>
      </div>
    );
  }
}
render(
  <App/>, document.getElementById('root'));

```


## Preview
<img style="margin:100px" src="https://raw.githubusercontent.com/ChrisKaragounis/React-SlimUX-Modal/ChrisKaragounis-readme-resources/ezgif.com-optimize.gif"></img>
