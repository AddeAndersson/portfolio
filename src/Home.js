import React, {Component} from 'react';

class Home extends Component {

  render() {
    return(
   	  <div>
      	<h1 style={styles.homescreenTitle}>
      		Hi there,<br/> 
        	I'm Adrian.
        </h1>
        <p style={styles.homescreenPara}>
              Welcome to my online portfolio. I am a M.Sc. <br/>
              Student  in Media Technology and Engineering <br/>
              at Linköping University.
        </p>
      </div>
    );
  }
}

export default Home;

const styles = {
	homescreenTitle: {
      color: 'black',
      fontSize: 'calc((12vh + 12vw)/2)',
      textAlign: 'left',
      justifyContent: 'start',
      float: 'left',
      width: '75%',
      lineHeight: 1.2,
    },
    homescreenPara: {
      color: 'black',
      opacity: 0.5,
      fontSize: 'calc((3vh + 3vw)/2)',
      textAlign: 'left',
      float: 'left',
      width: '75%',
    },
};