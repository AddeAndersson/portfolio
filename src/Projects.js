import React, {Component} from 'react';
import './Fonts.css';

function scrollToTop() {
    /*window.scrollTo({
      top: 0,
      behavior: "smooth"
    });*/
    window.scrollTo(0, 0);
}

function ShowVid(props){
  const thisItem = props.thisItem;
  const thatItem = props.thatItem;
  const vidSrc = props.vidSrc;
  if(thisItem === thatItem) {
    return <iframe 
      height="100%" width="100%" 
      src={vidSrc} 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>;
  }

  return null;
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.state = {chosenItem: 9999999, intervalId: 0};
  }



  isActive(item) {
      const active = {
            flex: '0 0 auto',
            boxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
            WebKitBoxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
            MozBoxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
            margin: '10px',
            height: 'min(calc(80vw + 20px), calc(80vh + 20px))',
            width: 'min(calc(80vw + 20px), calc(80vh + 20px))',
            padding: '5px',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontSize: 'calc((3vh + 0.5vw)/2)',
            backgroundColor: '#292726',
            //borderRadius: '50px 20px',
            color: 'white',
            order: '-1',
            cursor: 'default',
      };
      const inactive = {
            flex: '0 0 auto',
            boxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
            WebKitBoxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
            MozBoxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
            margin: '10px',
            height: 'min(40vw, 40vh)',
            width: 'min(40vw, 40vh)',
            padding: '5px',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontSize: 'calc((3vh + 0.5vw)/2)',
            backgroundColor: '#292726',
            //borderRadius: '50px 20px',
            color: 'white',
            cursor: 'pointer',
      };
      if(this.state.chosenItem === item) return active;
      else return inactive;
  }

  render() {

    const code = '<code/>';
    const preview = '<preview/>';

    return(
    	 <ul id="scrollstyle" style={styles.container}>
          <li style={this.isActive(0)} onClick={() => {this.setState({chosenItem: 0}); scrollToTop();}}>
              <h1 style={{color: '#3399FF'}}>Vacuum Hero</h1>
              <p>
                A racing game where the player controls a vacuum machine
                to collect exams in order to get points. The game takes
                place in a 3D model of Täppan in campus Norrköping.
              </p>
              <p>
                <a style={styles.inactiveLink}>
                    {code}
                </a>
                <a style={styles.inactiveLink}>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={this.isActive(1)} onClick={() => {this.setState({chosenItem: 1}); scrollToTop();}}>
              <h1 style={{color: '#3399FF'}}>Evaari</h1>
              <p>
                A RTS-styled VR game made in Unity. <br/>
                <ShowVid vidSrc="https://www.youtube.com/embed/h8h2IKuRL4c" thisItem={1} thatItem={this.state.chosenItem}/>
              </p>
              <p>
                <a style={styles.inactiveLink}>
                    {code}
                </a>
              </p>
          </li>
          
          <li style={this.isActive(2)} onClick={() => {this.setState({chosenItem: 2}); scrollToTop();}}>
              <h1 style={{color: '#3399FF'}}>Monte-Carlo Ray tracer</h1>
              <p>
                A project to render a simple scene
                containing Lambertian and Oren-Nayar reflectors in
                addition to transparent and perfectly reflecting objects.
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/MonteCarlo'>
                    {code}
                </a>
                <a style={styles.inactiveLink}>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={this.isActive(3)} onClick={() => {this.setState({chosenItem: 3}); scrollToTop();}}> 
              <h1 style={{color: '#3399FF'}}>Handwritten Number Identification</h1>
              <p>
                A MatLab program made to identify handwritten
                numbers using different algorithms.
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/NumberIdentification'>
                    {code}
                </a>
                <a style={styles.inactiveLink}>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={this.isActive(4)} onClick={() => {this.setState({chosenItem: 4}); scrollToTop();}}>
              <h1 style={{color: '#3399FF'}}>Lego Searcher</h1>
              <p>
                A website to browse through a database of lego pieces
                in order to see which set contains that piece.
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/LegoSearcher'>
                    {code}
                </a>
                <a style={styles.activeLink} href='http://www.student.itn.liu.se/~adran117/tnmk30/LegoProject/startpage.php'>
                    {preview}
                </a>
              </p>
          </li>

          <li style={this.isActive(5)} onClick={() => {this.setState({chosenItem: 5}); scrollToTop();}}>
              <h1 style={{color: '#3399FF'}}>Biljard Simulation</h1>
              <p>
                A short video as a result of simulating the initial
                hit in a game of biljard. <br/>
                <ShowVid vidSrc="https://www.youtube.com/embed/iTWdN_GpJhw" thisItem={5} thatItem={this.state.chosenItem}/>
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/TNM085'>
                    {code}
                </a>
              </p>
          </li>

          <li style={this.isActive(6)} onClick={() => {this.setState({chosenItem: 6}); scrollToTop();}}>
              <h1 style={{color: '#3399FF'}}>Shortest Path Through Ulam Spiral</h1>
              <p>
                A breadth-first search algorithm to find the shortest path between to
                integers in an Ulam spiral. Prime numbers act as obstacles.
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/UlamBFS'>
                    {code}
                </a>
                <a style={styles.inactiveLink}>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Online Portfolio</h1>
              <p>You are looking at it!</p>
              <p>
                <a style={styles.inactiveLink}>
                    {code}
                </a>
                <a style={styles.inactiveLink}>
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
      alignItems: 'stretch',
      listStyle: 'none',
      padding: 0,
      overflow: 'auto',
    },
  item: {
      flex: '0 0 auto',
      boxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
      WebKitBoxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
      MozBoxShadow: 'inset 0px 0px 6px rgba(255, 255, 255, 0.3)',
      margin: '10px',
      height: '40vh',
      width: '40vh',
      padding: '5px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: 'calc((3vh + 0.5vw)/2)',
      backgroundColor: '#292726',
      //borderRadius: '50px 20px',
      color: 'white',
    },
    inactiveLink: {
        color: 'white',
        textDecoration: 'line-through',
    },
    activeLink: {
        color: 'white',
        textDecoration: 'none',
    },
};