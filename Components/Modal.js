import React from "react";

class ModalContent extends React.Component {
    doNothing(event) {
        event.stopPropagation();
    }
    render() {
        return <div
            id="modal-content"
            onClick={(e) => this.doNothing(e)}
            className="modal-content">
            {this.props.children}
        </div>
    }
}
class Modal extends React.Component {
    render() {
        let modalStyle = {};
        modalStyle.display = this.props.isOpen
            ? "block"
            : "none";
        return (
            <div className="modal" style={modalStyle}>
                <ModalContent children={this.props.children}/>
            </div>
        );
    }
}
export default class ModalBox extends React.Component {
    render() {
        return (
            <div onClick={() => { this.props.OnClickOutside?this.props.OnClickOutside():null()}}>
                <Modal isOpen={this.props.isOpen} children={this.props.children}/>
            </div>
        );
    }
}