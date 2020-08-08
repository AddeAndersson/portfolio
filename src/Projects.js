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
//import html5_icon from './Icons/html5.svg';
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
//import unrealengine_icon from './Icons/unrealengine.svg';
import css3_icon from './Icons/css3.svg';
import TNM094 from './Documents/TNM094.pdf';
import TNCG15 from './Documents/TNCG15.pdf';
import TNM085 from './Documents/TNM085.pdf';
import TNM084 from './Documents/TNM084.pdf';
import TNA009 from './Documents/TNA009.pdf';
import TNM108 from './Documents/TNM108.pdf';
import TNM048 from './Documents/TNM048.pdf';
import Project from './Project.js';
import { Grid, Item } from 'semantic-ui-react'
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
        <Grid stackable divided centered columns={2} style={{overflow: 'auto'}} id="scrollstyle" className='override'>

          <Project open={this.state.modalVisible} handleClose={() => this.handleClose()}
          media={details[this.state.chosenItem].media} mediaSrc={details[this.state.chosenItem].mediaSrc} 
          title={details[this.state.chosenItem].title}/>

          <Grid.Row>
            { /*EVAARI*/ }
            <Grid.Column width={7}>
              <Item className='clickable' onClick={() => {this.changeState(0); this.setState({modalVisible: !this.state.modalVisible})}}>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Evaari</h1>
                  </Item.Header>
                  <Item.Description>
                    <p>A RTS-styled VR game made in Unity. <br/></p>
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
                  <Item.Description>
                    <p>
                      A terrain created with procedural methods and Poisson disk sampled instances of grass.
                      There is also a thunderstorm going on. Created with Three.js. <br/>
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <div>
                      <a style={{color: '#3399FF'}} href={TNM084} target="_blank" rel="noopener noreferrer">Open report</a><br/>
                      <a style={{color: '#3399FF'}} href={"https://addeandersson.github.io/ProceduralTerrain/"} target="_blank" rel="noopener noreferrer">Open preview</a>
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
            { /*MONTE CARLO*/ }
            <Grid.Column width={7}>
              <Item className='clickable' onClick={() => {this.changeState(2); this.setState({modalVisible: !this.state.modalVisible})}}>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Monte-Carlo Ray tracer</h1>
                  </Item.Header>
                  <Item.Description>
                    <p>
                      A project to render a simple scene
                      containing Lambertian and Oren-Nayar reflectors in
                      addition to transparent and perfectly reflecting objects. <br/>
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

            { /*TEXT MINING*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(3); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Text Mining</h1>
                  </Item.Header>
                  <Item.Description>
                    <p>
                      A project created to implement and compare LGK-Bidiagonalization and K-Means clustering to search
                      in a collection of medical abstracts from a set of search phrases. <br/>
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
          </Grid.Row>

          <Grid.Row>
            { /*BILLIARDS SIMULATION*/ }
            <Grid.Column width={7}>
              <Item className='clickable' onClick={() => {this.changeState(4); this.setState({modalVisible: !this.state.modalVisible})}}>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Billiards Simulation</h1>
                  </Item.Header>
                  <Item.Description>
                    <p>
                      A short video as a result of simulating the initial
                      hit in a game of billiards. <br/>
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

            { /*CLIMATE CHANGE DASHBOARD*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(5); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Climate Change Dashboard</h1>
                  </Item.Header>
                  <Item.Description>
                    <p>
                      A dashboard made to visualize climate changes. The dashboard features global carbon dioxide levels,
                      precipitation, and natural disasters as well as temperature data for each country. <br/>
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
          </Grid.Row>

          <Grid.Row>
            { /*MOVIE RECOMMENDER SYSTEM*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(6); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Movie Recommender System</h1>
                  </Item.Header>
                  <Item.Description>
                    <p>
                      A machine learning project to implement a collaborative based recommendation system for movies based
                      on Jaccard similarity. <br/>
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

            { /*ONLINE PORTFOLIO*/ }
            <Grid.Column width={7}>
              <Item /*className='clickable' onClick={() => {this.changeState(7); this.setState({modalVisible: !this.state.modalVisible})}}*/>
                <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                    <h1 style={{color: '#3399FF'}}>Online Portfolio</h1>
                  </Item.Header>
                  <Item.Description>
                    <p>You are looking at it!</p>
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
{title: "Evaari", mediaSrc: "h8h2IKuRL4c", media: "video"},
{title: "Procedural Terrain", mediaSrc: 'null', media: 'null'},
{title: "Monte-Carlo Ray tracer", mediaSrc: TNCG15_preview, media: "image"},
{title: "Text Mining", mediaSrc: 'null', media:'null'},
{title: "Biljard Simulation", mediaSrc: "iTWdN_GpJhw", media: "video"},
{title: "Climate Change Dashboard", mediaSrc:  'null', media: 'null'},
{title: "Movie Recommender", mediaSrc: 'null', media: 'null'},
{title: "Online Portfolio", mediaSrc: 'null', media: 'null'},
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