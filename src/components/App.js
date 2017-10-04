import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import {hashHistory} from 'react-router';
import SearchPage from './SearchPage/SearchPage';
import API from './../web-api/search.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
        pets: null
    }
  };

  updatePets = () => {
    let apiData = API.search;
    this.setState({pets: apiData}) 
  }
  
  componentDidMount = () => {
    this.updatePets();
  }

  render() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/static/search.json' render={() => 
                        <SearchPage pets={this.state.pets} />
                    } />

                    <Route exact path='/static/search.json?service=boarding' render={() => 
                        <SearchPage pets={this.state.pets} handleClick={this.handleClick}/>
                    } />
                    
                    <Route exact path='/static/search.json?service=sitting' render={() => 
                        <SearchPage pets={this.state.pets} />
                    } />

                    <button><Link to='/static/search.json'>Search Pets</Link></button>
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;