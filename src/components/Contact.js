import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
import list from "./list.svg";

class Contact extends Component {
  state = {
    contacts: [
      { name: "Ahmet", phone: "123-456-7890" },
      { name: "Mehmet", phone: "943-654-5941" },
      { name: "Hülya", phone: "822-934-3190" },
      { name: "Kemal", phone: "623-173-7567" },
      { name: "Zeynep", phone: "173-450-8620" },
    ],
  };

  addContact = (newContact) => {
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="h1">Phone Book</h1> 
        <img src={list} style={{ marginLeft: "10px" }} />
        <List contacts={this.state.contacts} />
        <Form addContact={this.addContact} />
      </div>
    );
  }
}

export default Contact;
