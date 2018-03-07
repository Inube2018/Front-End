import React from 'react';
import Navigator from './Navigator.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false, 
            activeTab: '0',
        };
        this.toggleTab = this.toggleTab.bind(this);
    }

    render() {
        if (!this.state.isLogged) {
            return (
              <div style={{height: '100%'}}>
                  <h1 className="text-info" style={{textAlign: 'center', marginTop: '2%'}}>iNube</h1>
                  <Navigator isLogged={this.state.isLogged} toggleTab={this.toggleTab} activeTab={this.state.activeTab}/>
              </div>
          );
        }
    }

    toggleTab(tab) {
        this.setState({
            activeTab: tab
        });
    }
}
export default App;
