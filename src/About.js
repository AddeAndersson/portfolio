import React, {Component} from 'react';

class About extends Component {



  render() {
    const Emph = ({word}) => <span style={styles.highlight}>{word}</span>;

    return(
   	  <div>
      	<p style={styles.para}>
            Lorem ipsum dolor sit amet, consectetur <Emph word="adipiscing"/> elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Justo donec enim diam vulputate ut. Nunc sed blandit libero volutpat sed. 
            Suspendisse sed nisi lacus sed viverra tellus. Amet luctus venenatis lectus 
            magna fringilla urna. Ullamcorper <Emph word="dignissim"/> cras tincidunt lobortis feugiat. 
            Elementum facilisis leo vel fringilla est. Eget lorem dolor sed viverra ipsum 
            nunc aliquet bibendum enim. Ut venenatis tellus in metus. Egestas sed tempus 
            urna et pharetra pharetra. <br/>
            <Emph word="Sapien"/> eget mi proin sed libero. Elementum curabitur 
            vitae nunc sed velit.
        </p>
      </div>
    );
  }
}

export default About;

const styles = {
	para: {
      fontSize: 'calc((2vh + 2vw)/2)',
      textAlign: 'left',
      float: 'left',
      width: '75%',
    },

  highlight: {
      color: '#0095ff',
      fontWeight: '900',
  }
};