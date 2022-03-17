import React, {Component} from 'react';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import PropTypes from 'prop-types';

class MultiSelection extends Component {

  state = {
    show: "",
    selected: [],
    cle: 0,
    data: this.props.data,
    search: this.props.data
  }

  handleDrop = () => {
    const {show} = this.state;
    if(show == "") {
      this.setState({show:"show"})
    } else {
      this.setState({show:""})
    }
  }

  handleDelete = (value) => {
    const {selected} = this.state;
    let filtre = selected.filter((item, index) => (item !== value));
    this.setState({selected: filtre});
    this.setState({show:""});
    this.props.handleValue(filtre);
  }

  handleSearch = e => {
    let elm = e.target.value;
    const {data} = this.state;
    let filtre = data.filter((item, index) => (item.search(elm) >= 0));
    this.setState({search: filtre});
 }
 
}

MultiSelection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleValue: PropTypes.func.isRequired,
  width: PropTypes.number,
}

export default MultiSelection;