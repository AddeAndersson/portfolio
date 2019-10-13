import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';

class App extends Component {

  render() {
    return(
   	  <div style={styles.container}>
      	<div style={styles.header}>
      		<Header/>
      	</div>
      </div>
    );
  }
}

export default App;

const styles = {
	container: {
		height: '100vh',
  		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		backgroundImage: 'radial-gradient(grey, black)',
		
	},

	header: {
		top: 0,
		width: '100%',
		backgroundColor: 'none',
	},
};
