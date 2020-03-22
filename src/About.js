import React, {Component} from 'react';
//import RadarChart from 'react-svg-radar-chart';
//import 'react-svg-radar-chart/build/css/index.css';
import headshot from './Images/headshot.JPG';

function Pic(props) {
  if(props.layout.height === "90%"){ //column
    return (<div style={styles.rightContainer}>
      <img alt='profile' style={styles.rightChild} src={headshot}/>
    </div>);
  }

  return null;
};

class About extends Component {

 constructor(props) {
    super(props);
    this.getLayout = this.getLayout.bind(this);
    this.state = { width: window.innerWidth, height: window.innerHeight, chosenItem: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getLayout(item) {
    const col = {
    	fontSize: 'calc((2vh + 2vw)/2)',
      	flex: '0 0 auto',
      	textAlign: 'left',
      	float: 'left',
      	color: 'white',
        height: 'auto',//0.5 * this.state.height,
        width: '90%',
        padding: '20px',
    };
    const row = {
    	fontSize: 'calc((2vh + 2vw)/2)',
        flex: '0 0 auto',
        textAlign: 'left',
        float: 'left',
        color: 'white',
        height: '90%',
        width: 0.5 * this.state.width,
        padding: '20px',
    };

    if(this.state.width > this.state.height) return row;
    else return col;
  }

  render() {
  	/*const data = [
		{
	    data: {
	      javascript: 4/5,
	      cplusplus: 5.0/5,
	      matlab: 4.5/5,
	      python: 3/5,
	      java: 3.5/5
		},
        meta: { color: '#3399FF' }
    	},
    ];
 
	const captions = {
      // columns
      javascript: 'Javascript: 4.0',
      cplusplus: 'C++: 5.0',
      matlab: 'MatLab: 4.5',
      python: 'Python: 3.0',
      java: 'Java: 3.5'
    };*/

    const Emph = ({word}) => <span style={styles.highlight}>{word}</span>;

    var opt = this.getLayout();

    return(
   	  <div style={styles.divStyle}>
      	<p style={opt}>
            I'm <Emph word="Adrian Andersson"/>, a M.Sc. Student in Media Technology and Engineering
            at the university of Linköping. Originally from <Emph word="Nässjö"/>, Småland,
            my interest for tech took me to Norrköping to study and become an engineer.
            I am currently on my <Emph word="fourth year"/> and have begun my masters. At the moment
            I have no special interest in any particular field, I'm still trying to decide
            which field to pursue. Media technology offers a strong foundation in programming,
            mathematics, and physics. On top of that media technology students excel in computer
            graphics, imaging, and visualization. 
            <br/>
            <br/>
            I have always been a fast learner and is <Emph word="eager to learn"/> new things, because 
            of this I have been successful in school and have achieved high grades in most 
            of my courses. Grades only matter that much when applying for a job which is why 
            I created this portfolio to showcase different projects.
            <br/>
            <br/>
            Special thanks to my wonderful and inspiring Jennifer for always 
            supporting me <Emph word="<3"/>.
            <br/>
            <br/>
            / / Adrian
        </p>
        <Pic layout={opt}/>
	  </div>
    );
  }
}

export default About;

const styles = {
	para: {
      fontSize: 'calc((2vh + 2vw)/3)',
      flex: '0 0 auto',
      textAlign: 'center',
      float: 'left',
      color: 'white',
    },

    rightChild: {
    	flex: '0 0 auto',
        alignItems: 'center',
        width: '100%',
        border: '10px solid white',
    },

    rightContainer: {
    	flexDirection: 'column',
    	display: 'flex',
    	alignItems: 'center',
    	flex: '0 0 auto',
    	width: '40vw',
    	maxWidth: '500px',
    },

    divStyle: {
    	display: 'flex',
      	flexDirection: 'row',
      	flexWrap: 'wrap',
      	justifyContent: 'space-evenly',
      	alignContent: 'space-evenly',
      	alignItems: 'center',
      	height: '100%',
        overflow: 'auto',
    },

	highlight: {
	  color: '#3399FF',
	  fontWeight: '900',
	}
};