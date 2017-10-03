import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
// import API from '../api/api';
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
    console.log('PETS', this.state.pets)
    return (
        <div>
        
            <Router>
                <Switch>
                    <Route path='/static/search.json/' render={() => 
                        <SearchPage pets={this.state.pets} />
                    } />
                        <Link to='/static/search.json'>Search Pets</Link>

                    {/* <Route exact path='/static/' render={() => 
                        <SearchPage /> 
                    } /> */}
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;