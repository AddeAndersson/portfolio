import React, {Component} from 'react';

class About extends Component {



  render() {
    const Emph = ({word}) => <span style={styles.highlight}>{word}</span>;

    return(
   	  <div>
      	<p style={styles.para}>
            I'm <Emph word="Adrian Andersson"/>, a M.Sc. Student in Media Technology and Engineering
            at the university of Linköping. Originally from <Emph word="Nässjö"/>, Småland,
            my interest for tech took me to Norrköping to study and become an engineer.
            I am currently on my <Emph word="fourth year"/> and have just begun my masters. At the moment
            I have no special interest in any particular field, I'm still trying to decide
            which field to pursue. Media technology offers a strong foundation in programming,
            mathematics, and physics. On top of that media technology students excel in computer
            graphics, imaging, and visualization. 
            <br/>
            <br/>
            I have always been a fast learner and is <Emph word="eager to learn"/> new things, because 
            of this I have been successful in school and have achieved high grades in most 
            of my courses. Grades only matter that much when applying for a job which is why 
            I also created this portfolio to showcase different projects.
            <br/>
            <br/>
            Special thanks to my wonderful and inspiring girlfriend for always 
            supporting me <Emph word="<3"/>.
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
      width: '60%',
    },

  highlight: {
      color: '#0095ff',
      fontWeight: '900',
  }
};