import React, {Component} from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

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
        height: 0.4 * this.state.height,
        width: '90%',
    };
    const row = {
    	fontSize: 'calc((2vh + 2vw)/2)',
        flex: '0 0 auto',
        textAlign: 'left',
        float: 'left',
        color: 'white',
        height: '90%',
        width: 0.4 * this.state.width,
    };
    if(this.state.width > this.state.height) return row;
    else return col;
  }

  render() {
  	const data = [
		{
	    data: {
	      maths: 4.9/5,
	      other: 5.0/5,
	      graphics: 4.5/5,
	      programming: 4.2/5,
	      physics: 5.0/5
		},
        meta: { color: '#3399FF' }
    	},
    ];
 
	const captions = {
      // columns
      maths: 'Mathematics: 4.9',
      other: 'Other: 5.0',
      graphics: 'Graphics: 4.5',
      programming: 'Programming: 4.2',
      physics: 'Physics: 5.0'
    };

    const Emph = ({word}) => <span style={styles.highlight}>{word}</span>;

    return(
   	  <div style={styles.divStyle}>
      	<p style={this.getLayout()}>
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
        </p>
      	<div style={styles.radarText}>
	        <RadarChart style={styles.radar}
		      captions={captions}
		      data={data}
		      size={Math.max(window.innerWidth / 3, window.innerHeight / 3)}
		    />
		    <p style={styles.para}>
		    	A representation of my current average grades cathegorized. <br/> 
		    	The grading is on a 3-5 scale, 5 being the highest.
		    </p>
		</div>
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

    radar: {
    	flex: '0 0 auto',
        alignItems: 'center',
        marginTop: '20px, 20px',
    },

    radarText: {
    	flexDirection: 'column',
    	display: 'flex',    
    },

    divStyle: {
    	display: 'flex',
      	flexDirection: 'row',
      	flexWrap: 'wrap',
      	justifyContent: 'space-evenly',
      	alignContent: 'flex-start',
      	alignItems: 'center',
    },

	highlight: {
	  color: '#3399FF',
	  fontWeight: '900',
	}
};