import React, {Component} from 'react';
import './Fonts.css';
import './Projects.css';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.css';
import './CarouselProjects.css';
import SVG from 'react-inlinesvg';
import TNCG15_preview from './Images/TNCG15.jpg';
//import c_icon from './Icons/c.svg';
import cplusplus_icon from './Icons/cplusplus.svg';
import csharp_icon from './Icons/csharp.svg';
import d3 from './Icons/d3.svg'; // NEW
//import github_icon from './Icons/github.svg';
import html5_icon from './Icons/html5.svg';
import javascript_icon from './Icons/javascript.svg';
//import linkedin_icon from './Icons/linkedin.svg';
import mysql_icon from './Icons/mysql.svg';
import node_icon from './Icons/node-dot-js.svg';
import php_icon from './Icons/php.svg';
import python_icon from './Icons/python.svg';
import react_icon from './Icons/react.svg';
import matlab_icon from './Icons/matlab.svg';
import unity_icon from './Icons/unity.svg';
import unrealengine_icon from './Icons/unrealengine.svg';
import css3_icon from './Icons/css3.svg';
import TNM094 from './Documents/TNM094.pdf';
import TNCG15 from './Documents/TNCG15.pdf';
import TNM085 from './Documents/TNM085.pdf';
import TNM084 from './Documents/TNM084.pdf';
import TNA009 from './Documents/TNA009.pdf';
import TNM108 from './Documents/TNM108.pdf';


function ShowVid(props){
  const thisItem = props.thisItem;
  const vidSrc = props.vidSrc;

  return <iframe 
          width='75%'
          height='100%'
          src={vidSrc + "?rel=0&modestbranding=0&autohide=1&showinfo=0&controls=1"}
          title={thisItem}
          style={{maxWidth: 800}}
          frameBorder="0" //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
         </iframe>;
}

function ShowPic(props){
  const picSrc = props.picSrc;

  return <img alt='' style={{width: "60%", maxWidth: 400, maxHeight: 400}} src={picSrc}/>
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
    if(item !== this.state.chosenItem) this.setState({chosenItem: item});
    else this.setState({chosenItem: -1});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  isActive(item) {
    if(this.state.width < 479){ //Phone
      const active = {
            height: '80vw',
            width: '80vw',
      };

      const inactive = {
            height: '55vw',
            width: '55vw',
      };
      if(this.state.chosenItem === item) return active;
      else return inactive;
    }
    else if(this.state.width < 991){ //Tablet
      const active = {
            height: '50vw',
            width: '50vw',
      };

      const inactive = {
            height: '35vw',
            width: '35vw',
      };
      if(this.state.chosenItem === item) return active;
      else return inactive;
    }
    else { //Desktop
      const active = {
            height: '40vw',
            width: '40vw',
      };

      const inactive = {
            height: '25vw',
            width: '25vw',
      };
      if(this.state.chosenItem === item) return active;
      else return inactive;
    }
      
  }

  render() {

    return(
      <div className='carouselCont' style={styles.carouselContainer}>
        <Carousel width={this.state.width} axis={"horizontal"} 
          showThumbs={false} infiniteLoop={true} transitionTime={800} 
          autoPlay={true} interval={7000} useKeyboardArrows={true}>
          <div style={styles.carouselItem}>
              <h1 style={{color: '#3399FF'}}>Biljard Simulation</h1>
              <p>
                A short video as a result of simulating the initial
                hit in a game of biljard. <br/>
              </p>
              <ShowVid className="fades" vidSrc="https://www.youtube.com/embed/iTWdN_GpJhw" thisItem={5} thatItem={this.state.chosenItem}/>
              <div>
                <a style={{color: '#3399FF'}} href={TNM085} target="_blank" rel="noopener noreferrer">Open report</a>
                <div className='icons'>
                  <SVG src={cplusplus_icon}/>
                </div>
              </div>
          </div>
          <div style={styles.carouselItem}>
              <h1 style={{color: '#3399FF'}}>Evaari</h1>
              <p>
                A RTS-styled VR game made in Unity. <br/>
              </p>
              <ShowVid className="fades" vidSrc="https://www.youtube.com/embed/h8h2IKuRL4c" thisItem={1} thatItem={this.state.chosenItem}/>
              <div>
                <a style={{color: '#3399FF'}} href={TNM094} target="_blank" rel="noopener noreferrer">Open report</a>
                <div className='icons'>
                  <SVG src={unity_icon}/>
                  <SVG src={csharp_icon}/>
                </div>
              </div>
          </div>
          <div style={styles.carouselItem}>
              <h1 style={{color: '#3399FF'}}>Monte-Carlo Ray tracer</h1>
              <p>
                A project to render a simple scene
                containing Lambertian and Oren-Nayar reflectors in
                addition to transparent and perfectly reflecting objects. <br/>
              </p>
              <ShowPic className="fades" picSrc={TNCG15_preview} thisItem={2} thatItem={this.state.chosenItem}/>
              <div>
                <a style={{color: '#3399FF'}} href={TNCG15} target="_blank" rel="noopener noreferrer">Open report</a>
                <div className='icons'>
                  <SVG src={cplusplus_icon}/>
                </div>
              </div>
          </div>
          <div style={styles.carouselItem}>
              <h1 style={{color: '#3399FF'}}>Procedural Terrain</h1>
              <p>
                A terrain created with procedural methods and Poisson disk sampled instances of grass.
                There is also a thunderstorm going on. Created with Three.js. <br/>
              </p>
              <div>
                <a style={{color: '#3399FF'}} href={TNM084} target="_blank" rel="noopener noreferrer">Open report</a><br/>
                <a style={{color: '#3399FF'}} href={"https://addeandersson.github.io/ProceduralTerrain/"} target="_blank" rel="noopener noreferrer">Open preview</a>
                <div className='icons'>
                  <SVG src={javascript_icon}/>
                </div>
              </div>
          </div>
          <div style={styles.carouselItem}>
              <h1 style={{color: '#3399FF'}}>Movie Recommender System</h1>
              <p>
                A machine learning project to implement a collaborative based recommendation system based
                on Jaccard similarity. <br/>
              </p>
              <div>
                <a style={{color: '#3399FF'}} href={TNM108} target="_blank" rel="noopener noreferrer">Open report</a>
                <div className='icons'>
                  <SVG src={python_icon}/>
                </div>
              </div>
          </div>
          <div style={styles.carouselItem}>
            <h1 style={{color: '#3399FF'}}>Text Mining</h1>
              <p>
                A project created to implement and compare LGK-Bidiagonalization and K-Means clustering to search
                in a collection of medical abstracts from a set of search phrases. <br/>
              </p>
              <div>
                <a style={{color: '#3399FF'}} href={TNA009} target="_blank" rel="noopener noreferrer">Open report</a>
                <div className='icons'>
                  <SVG src={matlab_icon}/>
                </div>
              </div>
          </div>
          <div style={styles.carouselItem}>
              <h1 style={{color: '#3399FF'}}>Online Portfolio</h1>
              <p>You are looking at it!</p>
              <div>
                <div className='icons'>
                  <SVG src={react_icon}/>
                  <SVG src={javascript_icon}/>
                  <SVG src={css3_icon}/>
                </div>
              </div>
          </div>
        </Carousel>
      </div>
          /*
          <li style={this.isActive(1)} className='clickable' onClick={() => {this.changeState(1)}}>
              <div style={styles.ribbon} className="corner-ribbon top-right sticky blue">Click me!</div>
              <h1 style={{color: '#3399FF'}}>Evaari</h1>
              <p>
                A RTS-styled VR game made in Unity. <br/>
                <a style={{color: '#3399FF'}} href={TNM094} target="_blank" rel="noopener noreferrer">Open report</a>
              </p>
              <ShowVid className="fades" vidSrc="https://www.youtube.com/embed/h8h2IKuRL4c" thisItem={1} thatItem={this.state.chosenItem}/>
              <div className='icons'>
                <SVG src={unity_icon}/>
                <SVG src={csharp_icon}/>
              </div>
          </li>

          <li style={this.isActive(7)} /*onClick={() => {this.changeState(7)}}>
              <h1 style={{color: '#3399FF'}}>Procedural Terrain</h1>
              <p>
                A terrain created with procedural methods and Poisson disk sampled instances of grass.
                There is also a thunderstorm going on. Created with Three.js. <br/>
                <a style={{color: '#3399FF'}} href={TNM084} target="_blank" rel="noopener noreferrer">Open report</a><br/>
                <a style={{color: '#3399FF'}} href={"https://addeandersson.github.io/ProceduralTerrain/"} target="_blank" rel="noopener noreferrer">Open preview</a>
              </p>
              <div className='icons'>
                <SVG src={javascript_icon}/>
              </div>
          </li>

          <li style={this.isActive(8)} /*onClick={() => {this.changeState(8)}}>
              <h1 style={{color: '#3399FF'}}>Text Mining</h1>
              <p>
                A project created to implement and compare LGK-Bidiagonalization and K-Means clustering to search
                in a collection of medical abstracts from a set of search phrases. <br/>
                <a style={{color: '#3399FF'}} href={TNA009} target="_blank" rel="noopener noreferrer">Open report</a>
              </p>
              <div className='icons'>
                <p>MatLab</p>
              </div>
          </li>
          
          <li style={this.isActive(10)} /*onClick={() => {this.changeState(10)}}>
              <h1 style={{color: '#3399FF'}}>Online Portfolio</h1>
              <p>You are looking at it!</p>
              <div className='icons'>
                <SVG src={react_icon}/>
                <SVG src={javascript_icon}/>
                <SVG src={css3_icon}/>
              </div>
          </li>
          */
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
      padding: '0%',
      overflow: 'auto',
    },
    carouselContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      height: "100%",
      width: "100%",
      alignContent: "center",
      justifyContent: "center",
    },
    carouselItem: {
        height: '90vh',
        width: '100vw',
        padding: '30px',
        color: 'white',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
    },
    preview: {
        maxWidth: 500,
    },
    inactiveLink: {
        color: 'white',
        textDecoration: 'line-through',
    },
    ribbon: {
        position: 'absolute',
        textAlign: 'center',
        overflow: 'hidden',
    },
    activeLink: {
        color: 'white',
        textDecoration: 'none',
    },
};