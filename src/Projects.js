import React, { Component } from 'react';
//import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.css';
import './CarouselProjects.css';
import SVG from 'react-inlinesvg';
import TNCG15_preview from './Images/TNCG15.jpg';
//import c_icon from './Icons/c.svg';
import cplusplus_icon from './Icons/cplusplus.svg';
import csharp_icon from './Icons/csharp.svg';
import d3_icon from './Icons/d3.svg'; // NEW
//import github_icon from './Icons/github.svg';
import html5_icon from './Icons/html5.svg';
import javascript_icon from './Icons/javascript.svg';
//import linkedin_icon from './Icons/linkedin.svg';
//import mysql_icon from './Icons/mysql.svg';
//import node_icon from './Icons/node-dot-js.svg';
//import php_icon from './Icons/php.svg';
import python_icon from './Icons/python.svg';
import react_icon from './Icons/react.svg';
import webgl_icon from './Icons/webgl.svg';
import opengl_icon from './Icons/opengl.svg';
import matlab_icon from './Icons/matlab.svg';
import unity_icon from './Icons/unity.svg';
import keras_icon from './Icons/keras.svg';
import tensorflow_icon from './Icons/tensorflow.svg';
import powershell_icon from './Icons/powershell.svg';
import opencv_icon from './Icons/opencv.svg';
//import unrealengine_icon from './Icons/unrealengine.svg';
import css3_icon from './Icons/css3.svg';
import TNM094 from './Documents/TNM094.pdf';
import TNCG15 from './Documents/TNCG15.pdf';
import TNM085 from './Documents/TNM085.pdf';
import TNM084 from './Documents/TNM084.pdf';
import TNA009 from './Documents/TNA009.pdf';
import TNM108 from './Documents/TNM108.pdf';
import TNM048 from './Documents/TNM048.pdf';
import TNM095 from './Documents/TNM095.pdf';
import TNM089 from './Documents/TNM089.pdf';
import Project from './Project.js';
import { Grid, Item } from 'semantic-ui-react';
import './Fonts.css';
import './Projects.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {chosenItem: 0, width: window.innerWidth, height: window.innerHeight, modalVisible: false};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  changeState(item){
    if(item !== this.state.chosenItem) this.setState({chosenItem: item});
    else this.setState({chosenItem: 0});
  }

  handleClose() {
    this.setState({modalVisible: false})
  }

  handleOpen() {
    this.setState({modalVisible: true})
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {

    return(
        <Grid stackable centered columns={2} style={{overflow: 'auto'}} id="scrollstyle" className='override'>

          <Project open={this.state.modalVisible} handleClose={() => this.handleClose()}
          media={details[this.state.chosenItem].media} mediaSrc={details[this.state.chosenItem].mediaSrc} 
          title={details[this.state.chosenItem].title} description={details[this.state.chosenItem].description}
          report={details[this.state.chosenItem].report}/>

          <Grid.Row>
            { /*EVAARI*/ }
            <Grid.Column width={7}>
              <Item className='clickable' onClick={() => {this.changeState(0); this.setState({modalVisible: !this.state.modalVisible})}}>
                <Item.Content style={styles.content} className='contenta'>
                  <div class="ribbon ribbon-top-right"><span>Click me!</span></div>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Evaari</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>A real time strategy game in virtual reality made in Unity.</p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNM094} target="_blank" rel="noopener noreferrer">Open report</a>
                      <div className='icons'>
                        <SVG src={unity_icon}/>
                        <SVG src={csharp_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>

            { /*PROCEDURAL TERRAIN*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(1); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Procedural Terrain</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A terrain created with procedural methods and Poisson disk sampled instances of grass.
                      There is also a thunderstorm going on. Created with Three.js.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNM084} target="_blank" rel="noopener noreferrer">Open report</a><br/>
                      <a style={{color: '#3399FF'}} href={"https://addeandersson.github.io/ProceduralTerrain/"} target="_blank" rel="noopener noreferrer">Open project</a>
                      <div className='icons'>
                        <SVG src={javascript_icon}/>
                        <SVG src={webgl_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            { /*TEXT MINING*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(2); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Text Mining</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A project created to implement and compare LGK-Bidiagonalization and K-Means clustering to search
                      in a collection of medical abstracts from a set of search phrases.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNA009} target="_blank" rel="noopener noreferrer">Open report</a>
                      <div className='icons'>
                        <SVG src={matlab_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>

            { /*A.I*/ }
            <Grid.Column width={7}>
              <Item className='clickable' onClick={() => {this.changeState(3); this.setState({modalVisible: !this.state.modalVisible})}}>
                <Item.Content style={styles.content} className='contenta'>
                  <div class="ribbon ribbon-top-right"><span>Click me!</span></div>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>DDPG Agent in TORCS</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A project to create and train a DDPG agent to race in the car
                      racing game TORCS. 
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNM095} target="_blank" rel="noopener noreferrer">Open report</a><br/>
                      <a style={{color: '#3399FF'}} href="https://youtu.be/-WjhglJGVds" target="_blank" rel="noopener noreferrer">Watch presentation</a>
                      <div className='icons'>
                        <SVG src={python_icon}/>
                        <SVG src={tensorflow_icon}/>
                        <SVG src={keras_icon}/>
                        <SVG src={powershell_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            { /*MONTE CARLO*/ }
            <Grid.Column width={7}>
              <Item className='clickable' onClick={() => {this.changeState(4); this.setState({modalVisible: !this.state.modalVisible})}}>
                <Item.Content style={styles.content} className='contenta'>
                  <div class="ribbon ribbon-top-right"><span>Click me!</span></div>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Monte-Carlo Ray tracer</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A project to render a simple scene
                      containing Lambertian and Oren-Nayar reflectors in
                      addition to transparent and perfectly reflecting objects.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNCG15} target="_blank" rel="noopener noreferrer">Open report</a>
                      <div className='icons'>
                        <SVG src={cplusplus_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column> 
          
            { /*BILLIARDS SIMULATION*/ }
            <Grid.Column width={7}>
              <Item className='clickable' onClick={() => {this.changeState(5); this.setState({modalVisible: !this.state.modalVisible})}}>
                <Item.Content style={styles.content} className='contenta'>
                  <div class="ribbon ribbon-top-right"><span>Click me!</span></div>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Billiards Simulation</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A short video as a result of simulating the initial
                      hit in a game of billiards.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNM085} target="_blank" rel="noopener noreferrer">Open report</a>
                      <div className='icons'>
                        <SVG src={cplusplus_icon}/>
                        <SVG src={opengl_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            { /*CLIMATE CHANGE DASHBOARD*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(6); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Climate Change Dashboard</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A dashboard made to visualize climate changes. The dashboard features global carbon dioxide levels,
                      precipitation, and natural disasters as well as temperature data for each country.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNM048} target="_blank" rel="noopener noreferrer">Open report</a><br/>
                      {/*<a style={{color: '#3399FF'}} href={} target="_blank" rel="noopener noreferrer">Open preview</a>*/}
                      <div className='icons'>
                        <SVG src={javascript_icon}/>
                        <SVG src={d3_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>

            { /*MOVIE RECOMMENDER SYSTEM*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(7); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Movie Recommender System</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A machine learning project to implement a collaborative based recommendation system for movies based
                      on Jaccard similarity.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNM108} target="_blank" rel="noopener noreferrer">Open report</a>
                      <div className='icons'>
                        <SVG src={python_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            { /*IMAGE STITCHER*/ }
            <Grid.Column width={7}>
              <Item className='clickable' onClick={() => {this.changeState(8); this.setState({modalVisible: !this.state.modalVisible})}}>
                <Item.Content style={styles.content} className='contenta'>
                  <div class="ribbon ribbon-top-right"><span>Click me!</span></div>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Tennis Image Stitcher</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A project to explore image stitching using as few as possible finished OpenCV functions. The aim is to stitch together a tennis match 
                      captured with two cameras aimed at each half of the court.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNM089} target="_blank" rel="noopener noreferrer">Open report</a>
                      <div className='icons'>
                        <SVG src={python_icon}/>
                        <SVG src={opencv_icon}/> 
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>

            { /*DISC DICE*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(9); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Disc Dice</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>
                      A small web-application for a disc golf game with rolling dice.
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={"https://addeandersson.github.io/DiscDice/"} target="_blank" rel="noopener noreferrer">Open project</a>
                      <div className='icons'>
                        <SVG src={html5_icon}/>
                        <SVG src={javascript_icon}/>
                        <SVG src={css3_icon}/>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column> 
          </Grid.Row>

          <Grid.Row>
            { /*ONLINE PORTFOLIO*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(8); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Online Portfolio</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                    <p style={{fontSize: '1.2em'}}>You are looking at it!</p>
                  </Item.Description>
                  <Item.Extra>
                    <div className='icons'>
                      <SVG src={react_icon}/>
                      <SVG src={javascript_icon}/>
                      <SVG src={css3_icon}/>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Home;

const details = [
{title: "Evaari", report: TNM094, mediaSrc: "h8h2IKuRL4c", media: "video", description: "A game developed as the media technology bachelor project. Two players battle each other by issuing units to fight for them and destroy the opponents castle. The game is made in Unity. Watch the video for a preview of the game!"},
{title: "Procedural Terrain", report: TNM084, mediaSrc: 'null', media: 'null', description: 'null'},
{title: "Text Mining", report: TNA009, mediaSrc: 'null', media: 'null', description: 'null'},
{title: "Deep Deterministic Policy Gradient Agent in TORCS", report: TNM095, mediaSrc: 'V_kxQbAES2E', media: 'video', description: "A project with the aim to implement and train a self-driving agent in the car racing game TORCS. Using python, Keras, and Tensorflow a Deep Deterministic Policy Gradient (DDPG) agent was created. Read the report for more information and watch the video for a demo of the agent."},
{title: "Monte-Carlo Ray Tracer", report: TNCG15, mediaSrc: TNCG15_preview, media: "image", description: "A program created to produce photo realistic images of a scene containing mirrors, glass, and diffuse objects. A ray tracer is based on how light interacts with objects in real life. The program is created in C++. For more information read the report."},
{title: "Billiard Simulation", report: TNM085, mediaSrc: "iTWdN_GpJhw", media: "video", description: "A simulation of the initial hit and the resulting collisions in a game of billiards. The simulation is made in C++ and OpenGL. Watch the video to see the final result!"},
{title: "Climate Change Dashboard", report: TNM048, mediaSrc:  'null', media: 'null', description: 'null'},
{title: "Movie Recommender", report: TNM108, mediaSrc: 'null', media: 'null', description: 'null'},
{title: "Tennis Image Stitcher", report: TNM089, mediaSrc: "EzEZCa5NmuE", media: "video", description: "A project to create a fuller experience when watching tennis. Stitching is applied with minimal use of pre-existing OpenCV functions to two video sequences of a tennis match. The videos contain one half of the tennis court each and when they are stitched together they capture the entire court. Watch the video for the final result!"},
{title: "Online Portfolio", report: 'null', mediaSrc: 'null', media: 'null', description: 'null'},
];

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
    content: {
      color: 'white',
      overflow: 'hidden',
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