import React, { Component } from 'react';
import Beer from './components/Beer'
import './App.css';
import api from './components/Api'


class App extends Component {
  state = {
    beers: null,
    filterStr: '',
    clicked: true,
    beerClicked: 0
  }
  handleChange = this.handleChange.bind(this)
  handleToggleClick = this.handleToggleClick.bind(this)
  componentDidMount = this.componentDidMount.bind(this)
  handleSubmit = this.handleSubmit.bind(this)
  closeForm = this.closeForm.bind(this)
  componentDidMount() {
   
    this.fetchBeers()
  
  }


  handleToggleClick(beerNumber) {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
      beerClicked: beerNumber
    }))
  }

  handleSubmit(event){
    event.preventDefault();
    const beer = this.state.beers.find((beer) => {return beer.id === parseInt(event.target.id)})
    
    api.updateBeer(beer.id, beer)
    .then(() => this.setState({clicked: true, beerClicked: 0}))
    .catch(err => console.error(err));


  }
  closeForm(){
    this.setState({clicked: true, beerClicked: 0})
  }

  async fetchBeers() {
    const url = 'http://localhost:3000/beers'
    const response = await fetch(url)
    const beers = await response.json()
    this.setState({beers})
  }

  deleteBeer = (id) => {
    api.deleteBeer(id)
    .then(beer => {
      this.setState(prevState => {
        return {
          beers: prevState.beers.filter(beer => beer.id !== id)
        }
      })
      
    }
     

  )}

  handleChange(event) {
  
    const beer = this.state.beers.find((beer) => {return beer.id === parseInt(event.target.id)})
    

    const beers = this.state.beers
    const field = event.target.name
    /// yeast is nested deeper than other properties hence below tenerie hard coding beer.ingredients.yeast
    field === 'yeast' ? beer.ingredients.yeast = event.target.value : beer[field] = event.target.value

    this.setState({beers: beers})
  }

  

  render() {
    const { beers } = this.state
    const { filterStr } = this.state
    if (!beers) {
      return <div className="App">Loading...</div>;
    }

    const allBeers = beers
    .filter(
      beer =>
        beer.name.toLowerCase().includes(filterStr)
    )
    .map(beer => {
      return <Beer closeForm={this.closeForm} clicked={this.state.clicked} beerClicked={this.state.beerClicked} showForm={this.handleToggleClick}key={beer.id} {...beer} deleteBeer={this.deleteBeer} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>;
    });
    return (
      <div className="App">
      
          <h1> Beers </h1>
          <input
          className="searchbar"
            type="text"
            placeholder="search beer"
            defaultValue=""
            onChange={e => {
              this.setState({ filterStr: e.target.value.toLowerCase() });
            }}
          />
          <button  type="button" className="btn btn-success">Add a brewsky!</button>
     
      
          <div className="beers">{allBeers}</div>

      </div>
    );
  }
}

export default App;
