import React, { Component } from 'react';
import './Components.css';
import Modal from 'react-modal';
import GroceryImage from '../img/groceries.png';

import GroceryApps from './GroceryApps'
import authFetch from "../utils/authFetch";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        height                : 'auto',
        width                 : 'auto',
        maxWidth              : '800px',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');



class GroceryPanel extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            grocery: [],


        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.fetchItem = this.fetchItem.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
        this.fetchItem();
    }

    componentDidMount() {
        this.fetchItem();
    }

    async fetchItem() {
        const resp = await authFetch('/api/households/groceries');
        if (resp.ok) {
            this.setState({
                grocery: await resp.json()
            });
            console.log(this.state.grocery);
        }

    }



//TODO: Create Function to populate table of Groceries.
//TODO: Create Function to add Item to GroceryList

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
                    <h1><img src={GroceryImage} alt="GroceryImage" /> Groceries</h1>
                    <GroceryApps/>
                </Modal>

                <div className="flex-item" id="Grocery" onClick={this.openModal}>
                    <div className = "flex-item-header">
                        <img src={GroceryImage} alt="GroceryImage" />
                        <h4>Grocery</h4>
                    </div>
                    <span className="label label-primary">{this.state.grocery.length} Items</span>
                    <h5 className="mb-1">Collaborated Grocery List</h5>
                </div>
            </div>
        );

    }


}


export default GroceryPanel;
