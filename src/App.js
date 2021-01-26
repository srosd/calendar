import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Modal from './components/Modal';


const localizer = momentLocalizer(moment);


// const localData = (JSON.parse(localStorage.getItem('events'))) || [];    expresión para traer el localStorage



class App extends Component {

  state = {
    events: [{}],           //Array donde se guardarán los eventos creados
    newEvent: {             //Objeto donde se guardarán los datos del nuevo evento antes de añadirlo al arreglo
      start: new Date(),
      end: new Date(),
      title: ''
    }
    // ,
    // getter: true     este getter se utilizó como opción para manejar el get de localStorage
  };
  
  //Las siguientes 5 funciones se utilizan para manejar la información del formulario 
  // y añadirla al objeto newEvent del state antes de añadirlo a la lista de eventos
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
    const newTime = {...this.state.newEvent};
    newTime.start.setHours(e.target.value);
    newTime.start.setMinutes('00');
    this.setState({newEvent: newTime});
    
  };
  onChangeDuration = e => {
    const newTime = {...this.state.newEvent};
    const startTime = this.state.newEvent.start.getHours();
    const newHour = startTime + Number(e.target.value);
    newTime.end.setHours(newHour);
    newTime.end.setMinutes('00');
    this.setState({newEvent: newTime});
    
  };



  //Esta función sirve para añadir la información del newEvent al arreglo events del state
  // y que se muestre en pantalla
  handleSubmit= e => {
    e.preventDefault();
    
    this.setState({ 
      events: [...this.state.events, this.state.newEvent],
      newEvent: {
        start: new Date(),
        end: new Date(),
        title: ''
      }
    });
  }
  
  //Dejo esta función porque el guardado al localStorage funciona, faltaría conseguir hacer el get
  // de esa información, que da un error al cambiar de vista a semana o día.
  componentDidUpdate(){
    if(this.state.events){
      localStorage.setItem('events', JSON.stringify(this.state.events));
    }
  }

  //Las dos siguientes funciones fueron parte de el itento de dejar funcionando el localStorage
  // componentDidMount(){
  //   if(this.state.getter){
  //     this.setState({events: localData})
  //   }
  // }

  // viewChange = (view) => {
  //   if(view==='month'){
  //     this.setState({...this.state, getter: true});
  //   } else {
  //     this.setState({...this.state, getter: false});
  //   }
  // }

  render() {
    return (
      <div className="App">
      {/* El componente Calendar se importa desde el package react-big-calendar en la línea 2*/}
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
          // onView={this.viewChange}
        />
        {/* El componente Modal es componente propio creado a partir de bootstrap para mostrar el
        en pantalla y añadir eventos a través de él */}
        <Modal 
          start={this.state.newEvent.start} 
          end={this.state.newEvent.end} 
          onChangeStart={this.onChangeStart} 
          onChangeEnd={this.onChangeEnd} 
          onChangeTitle={this.onChangeTitle} 
          handleSubmit={this.handleSubmit} 
          onChangeTime={this.onChangeTime}
          onChangeDuration={this.onChangeDuration}
          newEvent={this.state.newEvent}
          />

        {/* botón de añadir evento implementado utilizando bootstrap y fontawesome */}
        <button type="button" className="btn btn-primary add-event-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="far fa-calendar-plus fa-3x"></i>
        </button>
      </div>

      
    );
  }
}

export default App;
