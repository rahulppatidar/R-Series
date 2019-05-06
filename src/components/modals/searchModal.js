/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {  Modal, ModalBody } from 'reactstrap';
import SearchForm from '../../container/forms/searchForm/searchForm';
class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const {buttonLabel} = this.props;
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{buttonLabel}</Button> */}
        <span onClick={this.toggle}>{buttonLabel}</span>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
            <SearchForm />
          </ModalBody>
          
        </Modal>
      </div>
    );
  }
}

export default SearchModal;