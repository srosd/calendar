import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Modal from './components/Modal';


const localizer = momentLocalizer(moment);

class App extends Component {

  state = {
    events: [{}],
    newEvent: {
      start: new Date(),
      end: new Date(),
      time: '',
      duration: '',
      title: ''
    }
  };

  onChangeStart = fecha => {
    this.setState({newEvent: {...this.state.newEvent, start: fecha}});
  }
  onChangeEnd = fecha => {
    this.setState({newEvent: {...this.state.newEvent, end: fecha}})
  }
  onChangeTitle = e => {
		this.setState({ newEvent: { ...this.state.newEvent, title: e.target.value } });
  };
  onChangeTime = e => {
    console.log(e.target.value);
		// this.setState({ newEvent: { ...this.state.newEvent, time: e.target.value } });
  };
  onChangeDuration = e => {
    console.log(e.target.value);
		// this.setState({ newEvent: { ...this.state.newEvent, duration: e.target.value } });
  };

  handleSubmit= e => {
    e.preventDefault();
    
    // console.log(this.state.newEvent.start)
    this.setState({ 
      events: [...this.state.events, this.state.newEvent],
      newEvent: {
        start: new Date(),
        end: new Date(),
        title: ''
      }
    });
    // myModal.hide();

}

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

        <Modal 
          start={this.state.newEvent.start} 
          end={this.state.newEvent.end} 
          onChangeStart={this.onChangeStart} 
          onChangeEnd={this.onChangeEnd} 
          onChangeTitle={this.onChangeTitle} 
          handleSubmit={this.handleSubmit} 
          newEvent={this.state.newEvent}
          />

        <button type="button" className="btn btn-warning add-event-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="far fa-calendar-plus fa-3x"></i>
        </button>
      </div>

      
    );
  }
}

export default App;
