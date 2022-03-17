import React, {Component} from 'react';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import PropTypes from 'prop-types';

class MultiSelection extends Component {

}

MultiSelectInput.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleValue: PropTypes.func.isRequired,
  width: PropTypes.number,
}

export default MultiSelectInput;