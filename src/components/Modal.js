import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Arreglo utilizado para iterar sobre él para crear las opciones de los selects del formulario
// sin tener que picar el código de todas las opciones
const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

class Modal extends React.Component {

    
    render(){
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="text-center" onSubmit={this.props.handleSubmit}>

                                <label htmlFor="title">Title:</label>
                                <input 
                                    type="text"
                                    name="title"
                                    value={this.props.newEvent.title}
                                    onChange={(e)=>this.props.onChangeTitle(e)}
                                    />
                                    
                                <br />
                                <label htmlFor="start"> Start:</label>

                                {/* DatePicker es un componente de React utilizado para 
                                manejar fechas en formularios. Importado en la línea 2 */}
                                
                                <DatePicker 
                                    selected={this.props.start} 
                                    onChange={this.props.onChangeStart}
                                    dateFormat="dd/MM/yyyy" 
                                    />
                                <br />
                                  
                                <label htmlFor="start">End:</label>
                                <DatePicker 
                                    selected={this.props.end} 
                                    onChange={this.props.onChangeEnd}
                                    dateFormat="dd/MM/yyyy"    
                                    />
                                <br />
                                <label htmlFor="hours">Time:</label>
                                <select name="hours" defaultValue="**" onChange={this.props.onChangeTime}>
                                <option id="select-hour" disabled value="**">Selecciona la hora</option>
                                {/* los maps de las siguientes lineas son para generar las etiquetas option
                                de los select */}
                                {
                                    hours.map((hour, i)=>{
                                        return <option key={i} value={hour}>{hour}</option>
                                    })
                                }
                                </select>
                                <br />
                                <label htmlFor="duration">Duration (h):</label>
                                <select name="duration" defaultValue="**" onChange={this.props.onChangeDuration}>
                                <option id="select-duration" disabled value="**">Selecciona la duración</option>
                                {
                                    hours.map((hour, i)=>{
                                        return <option key={i} value={hour + 1}>{hour + 1}</option>
                                    })
                                }
                                </select>
                                <hr />
                                <div className="text-end">
                                    <button type="button" className="btn btn-danger cancel-btn" data-bs-dismiss="modal" >Cancel</button>
                                    <button type="submit" className="btn btn-primary">Add Event</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Modal;
