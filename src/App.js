import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import 'semantic-ui-css/semantic.css'



class App extends Component {

  render() {
    return(
      <div>
	   	  <div style={styles.container}>
	      	<div style={styles.header}>
	      		<Header/>
	      	</div>
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
		backgroundColor: '#292726',
		
	},

	header: {
		top: 0,
		width: '100%',
		backgroundColor: 'none',
	},
};
