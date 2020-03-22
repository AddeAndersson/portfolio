import React, {Component} from 'react';
import './Home.css';

class Home extends Component {

  render() {
    return(
   	  <div>
      	<div className='css-typing' style={styles.homescreenTitle}>
      		<p>Hi there,</p> 
        	<p>I'm Adrian.</p>
        </div>
        <p className='fadein' style={styles.homescreenPara}>
              Welcome to my online portfolio. I am a M.Sc.
              Student  in Media Technology and Engineering
              at Linköping University.
        </p>
      </div>
    );
  }
}

export default Home;

const styles = {
	homescreenTitle: {
      color: 'white',
      fontSize: 'calc((7vh + 15vw)/2)',
      textAlign: 'left',
      justifyContent: 'start',
      float: 'left',
      width: '60%',
      lineHeight: 1.2,
      marginLeft: '30px',
      padding: 0,
    },
    homescreenPara: {
      color: 'grey',
      fontSize: 'calc((3vh + 3vw)/2)',
      textAlign: 'left',
      float: 'left',
      width: '60%',
      marginLeft: '30px',
    },
};