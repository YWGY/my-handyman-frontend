import React from 'react';
import Routes from './components/App/Routes';
import TopNav from './components/App/TopNav';

class App extends React.Component{
    render() {
        return (
          <div>
            <TopNav />           
            <Routes />           
          </div>
        );
      }
}
export default App;
