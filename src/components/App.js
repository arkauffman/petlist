import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router,
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
// import API from './../api/api.js';

class App extends Component {
  constructor() {
    super();
  };

  componentDidMount = () => {
    // this.updateLanguage(this.state.selectedLanguage);
  };

//   updateLanguage = (language) => {
//     this.setState(() => ({
//       selectedLanguage: language,
//       repos: null
//     }))

//     API.fetchPopularRepositories(language).then((data) => {
//       this.setState({
//         selectedLanguage: language,
//         repos: data
//       })
//     })
//   };

  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' render={() => 
                    <SearchPage />
                } />

                <Route exact path='/' render={() => 
                    <SearchPage /> 
                } />
            </Switch>
        {/* <div>
        <button>Search Pets</button>
        </div> */}
        </Router>
      
    );
  }
}

export default App;