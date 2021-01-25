import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Modal from './components/Modal';


const localizer = momentLocalizer(moment);

class App extends Component {
  state = {
    events: [
      {
        start: '2021-01-01',
        end: '2021-01-02',
        title: "Entrega"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />

        <Modal />
      </div>

      
    );
  }
}

export default App;
