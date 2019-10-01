import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import background from './Images/wallhaven-4yjxkg.jpg';

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
		backgroundImage: 'radial-gradient(white, grey)',
		
	},

	header: {
		top: 0,
		width: '100%',
		backgroundColor: 'none',
	},
};
