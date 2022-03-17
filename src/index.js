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

  handleClick = (value) => {
    const {selected, data} = this.state;
    let filtre = selected.filter((item, index) => (item === value));
    if (filtre == 0) {
      selected.push(value)
    }
    this.setState({selected});
    this.setState({show:""});
    this.setState({search: data});
    this.props.handleValue(selected);
    document.getElementById("input").value = "";
  }

  render() {
    const {show, selected, search} = this.state;
    let affiche = [];
    let row = this.props.width == 'undefined' || this.props.width == undefined? 300: this.props.width;
    const calcul = (row*10)%12 > 0 ? ~~((row*10)/12) + 2: ((row*10)/12)+1;
    
    for(let i =0; i < search.length; i++) {
      affiche.push(<a key={'s'+i} className="dropdown-item" onClick={() => this.handleClick(search[i])}>{search[i]}</a>)     
    }

    return (
      <div className={styles.row+ ' row'} style={{width: row+'px'}}>
        <div className='col-md-10 '>
          {selected.map(item =>
            <button key={item} type="button" className="btn btn-light m-1">
                {item} <span onClick={() => this.handleDelete(item)} className={"badge badge-light "+ styles.badge}>X</span>
            </button>
          )}
        </div>
        <div className="col-md-2">
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" onClick={this.handleDrop} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div style={{width: (row-10)+'px', marginLeft: '-'+calcul+'px'}} className={styles.menu +' dropdown-menu '+ show} aria-labelledby="dropdownMenuButton">
              <input id='input' onChange={this.handleSearch} className={'dropdown-item form-control '} placeholder="search ..." style={{border: 'solid 1px #c5c5c5'}} type="text" />
              {affiche.map(item =>
                item
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

MultiSelection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleValue: PropTypes.func.isRequired,
  width: PropTypes.number,
}

export default MultiSelection;