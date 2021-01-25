import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

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
                                <label htmlFor="start">Start:</label>
                                <DatePicker selected={this.props.start} onChange={this.props.onChangeStart}/>
                                <br />
                                <label htmlFor="start">End:</label>
                                <DatePicker selected={this.props.end} onChange={this.props.onChangeEnd}/>
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
