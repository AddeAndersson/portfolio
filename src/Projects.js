import React, {Component} from 'react';
import './Fonts.css';

class Home extends Component {

  render() {

    const code = '<code/>';
    const preview = '<preview/>';

    return(
    	 <ul id="scrollstyle" style={styles.container}>
          <li style={styles.item}>
              Vacuum Hero
          </li>
          
          <li style={styles.item}>
              Biljard Simulation
          </li>
          
          <li style={styles.item}>
              Monte-Carlo Ray tracer
          </li>
          
          <li style={styles.item}>
              Handwritten Number Identification
          </li>
          
          <li style={styles.item}>
              Lego Searcher
          </li>
          
          <li style={styles.item}>
              <h1>Online Portfolio</h1>
              <p>You are looking at it.</p>
              <p>
                <a href='https://github.com/AddeAndersson'>
                    {code}
                </a>
                <a href='https://youtube.com/'>
                    {preview}
                </a>
              </p>
          </li>
       </ul>
    );
  }
}

export default Home;

const styles = {
	container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
      listStyle: 'none',
      padding: 0,
      overflowY: 'scroll',
    },
  item: {
      flex: '0 0 25%',
      boxShadow: '0 0 10px rgba(0, 149, 255, 0.6)',
      WebKitBoxShadow: '0 0 10px rgba(0, 149, 255, 0.6)',
      margin: '10px',
      height: '25vh',
      padding: '5px',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
};