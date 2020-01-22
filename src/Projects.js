import React, {Component} from 'react';
import './Fonts.css';
import './Projects.css';
import TNCG15 from './Images/TNCG15.jpg';

/*function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    window.scrollTo(0, 0);
}*/

function ShowVid(props){
  const thisItem = props.thisItem;
  const thatItem = props.thatItem;
  const vidSrc = props.vidSrc;
  if(thisItem === thatItem) {
    return <iframe 
      width="60%" height='60%'
      src={vidSrc} 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>;
  }

  return null;
}

function ShowPic(props){
  const thisItem = props.thisItem;
  const thatItem = props.thatItem;
  const picSrc = props.picSrc;
  if(thisItem === thatItem) {
    return <img style={{width: "60%"}} src={picSrc}/>
  }

  return null;
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.isActive = this.isActive.bind(this);
    this.state = {chosenItem: -1, width: window.innerWidth, height: window.innerHeight};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  changeState(item){
    if(item != this.state.chosenItem) this.setState({chosenItem: item});
    else this.setState({chosenItem: -1});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  isActive(item) {
    if(this.state.width < 600){
      const active = {
            height: 'calc(80vw + 20px)',
            width: 'calc(80vw + 20px)',
      };

      const inactive = {
            height: 'calc(55vw + 20px)',
            width: 'calc(55vw + 20px)',
      };
      if(this.state.chosenItem === item) return active;
      else return inactive;
    }
    else if(this.state.width < 900){
      const active = {
            height: 'calc(50vw + 20px)',
            width: 'calc(50vw + 20px)',
      };

      const inactive = {
            height: 'calc(30vw + 20px)',
            width: 'calc(30vw + 20px)',
      };
      if(this.state.chosenItem === item) return active;
      else return inactive;
    }
    else {
      const active = {
            height: 'calc(40vw + 20px)',
            width: 'calc(40vw + 20px)',
      };

      const inactive = {
            height: 'calc(25vw + 20px)',
            width: 'calc(25vw + 20px)',
      };
      if(this.state.chosenItem === item) return active;
      else return inactive;
    }
      
  }

  render() {

    const code = '<code/>';
    const preview = '<preview/>';

    const ref = React.createRef();
    const scrollToTop = () =>
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
    });

    return(
    	 <ul id="scrollstyle" style={styles.container}>
          <li ref={ref} style={this.isActive(0)} onClick={() => {this.changeState(0)}}>
              <h1 style={{color: '#3399FF'}}>Vacuum Hero</h1>
              <p className="fades">
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
          
          <li ref={ref} style={this.isActive(1)} onClick={() => {this.changeState(1)}}>
              <h1 style={{color: '#3399FF'}}>Evaari</h1>
              <p className="fades">
                A RTS-styled VR game made in Unity. <br/>
              </p>
              <ShowVid className="fades" vidSrc="https://www.youtube.com/embed/h8h2IKuRL4c" thisItem={1} thatItem={this.state.chosenItem}/>
              <p>
                <a style={styles.inactiveLink}>
                    {code}
                </a>
              </p>
          </li>
          
          <li ref={ref} style={this.isActive(2)} onClick={() => {this.changeState(2)}}>
              <h1 style={{color: '#3399FF'}}>Monte-Carlo Ray tracer</h1>
              <p className="fades">
                A project to render a simple scene
                containing Lambertian and Oren-Nayar reflectors in
                addition to transparent and perfectly reflecting objects.
              </p>
              <ShowPic className="fades" picSrc={TNCG15} thisItem={2} thatItem={this.state.chosenItem}/>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/MonteCarlo'>
                    {code}
                </a>
              </p>
          </li>
          
          <li ref={ref} style={this.isActive(3)} onClick={() => {this.changeState(3)}}> 
              <h1 style={{color: '#3399FF'}}>Digit Identification</h1>
              <p className="fades">
                A MatLab program made to identify handwritten
                digits using different algorithms.
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
          
          <li ref={ref} style={this.isActive(4)} onClick={() => {this.changeState(4)}}>
              <h1 style={{color: '#3399FF'}}>Lego Searcher</h1>
              <p className="fades">
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

          <li ref={ref} style={this.isActive(5)} onClick={() => {this.changeState(5)}}>
              <h1 style={{color: '#3399FF'}}>Biljard Simulation</h1>
              <p className="fades">
                A short video as a result of simulating the initial
                hit in a game of biljard. <br/>
              </p>
              <ShowVid className="fades" vidSrc="https://www.youtube.com/embed/iTWdN_GpJhw" thisItem={5} thatItem={this.state.chosenItem}/>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/TNM085'>
                    {code}
                </a>
              </p>
          </li>

          <li ref={ref} style={this.isActive(6)} onClick={() => {this.changeState(6)}}>
              <h1 style={{color: '#3399FF'}}>Shortest Path Through Ulam Spiral</h1>
              <p className="fades">
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

          <li ref={ref} style={this.isActive(7)} onClick={() => {this.changeState(7)}}>
              <h1 style={{color: '#3399FF'}}>Procedural Terrain</h1>
              <p className="fades">
                A terrain created with procedural methods and Poisson disk sampled instances of grass.
                There is also a thunderstorm going in. Created with Three.js.
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/ProceduralTerrain'>
                    {code}
                </a>
                <a style={styles.activeLink} href='https://addeandersson.github.io/ProceduralTerrain/'>
                    {preview}
                </a>
              </p>
          </li>

          <li ref={ref} style={this.isActive(8)} onClick={() => {this.changeState(8)}}>
              <h1 style={{color: '#3399FF'}}>Text Mining</h1>
              <p className="fades">
                A project created to implement and compare LGK-Bidiagonalization and K-Means clustering to search
                in a collection of medical abstracts from a set of search phrases.
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/TNA009DataMining'>
                    {code}
                </a>
                <a style={styles.inactiveLink}>
                    {preview}
                </a>
              </p>
          </li>

          <li ref={ref} style={this.isActive(9)} onClick={() => {this.changeState(9)}}>
              <h1 style={{color: '#3399FF'}}>Movie Recommender System</h1>
              <p className="fades">
                A machine learning project to implement a collaborative based recommendation system based
                on Jaccard similarity.
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
          
          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Online Portfolio</h1>
              <p className="fades">You are looking at it!</p>
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
      //padding: '0% 9%',
      overflow: 'auto',
    },
  item: {
        height: 'min(40vw, 40vh)',
        width: 'min(40vw, 40vh)',
        cursor: 'default',
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