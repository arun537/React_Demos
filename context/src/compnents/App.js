import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';

class App extends React.Component {

  state = { language: 'ENGLISH' }


  onLanguageChange = (language) => {
    console.log(language);
    this.setState({ language })
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a Language
          <i className='flag us' onClick={() => this.onLanguageChange('ENGLISH')} />
          <i className='flag nl' onClick={() => this.onLanguageChange('SPANISH')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;
