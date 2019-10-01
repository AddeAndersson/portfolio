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
      color: 'black',
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
      color: 'black',
      opacity: 0.5,
      fontSize: 'calc((3vh + 3vw)/2)',
      textAlign: 'left',
      float: 'left',
      width: '60%',
      marginLeft: '30px',
    },
};