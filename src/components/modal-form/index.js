import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class ModalTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      isEdit: false,
      updatedData: {}
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...nextProps, updatedData: nextProps.data});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ 
      updatedData: {...this.state.updatedData,
        [name]: value 
      }
    });
  }

  update() {
    this.props.updateRow(this.state.updatedData);
  }

  toggleEdit() {
    this.setState({updatedData: this.state.data, isEdit: !this.state.isEdit});
  }

  render() {
    const { columnsInfo, updatedData, isEdit } = this.state;
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <button onClick={this.toggleEdit}>Edit</button> Edit mode: { isEdit }
          <div>I am a modal</div>
          <form>
            {this.state.modalIsOpen && columnsInfo.map((column, index) => {
              if(column.accessor) {
                return (
                  <div key={index}>
                    <label>{column.accessor} </label>
                    <input name={column.accessor} 
                      type={column.type} 
                      value={column.type === "date" ? moment(updatedData[column.accessor]).format("YYYY-MM-DD") : updatedData[column.accessor]} 
                      disabled={!isEdit} 
                      onChange={this.handleChange} >
                    </input>
                  </div>
                );
              }
              else {
                return false;
              }
            }
            )}
          </form>
          <button onClick={this.update}>Update</button>
        </Modal>
      </div>
    );
  }
}
//                        {this.state.modalIsOpen && JSON.stringify(Array.from(columnsInfo))}

