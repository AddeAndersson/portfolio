import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './CarouselProjects.css';
import SVG from 'react-inlinesvg';
import Project from './Project.js';
import projects from './Projects.json';
import { Grid, Item } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import './Fonts.css';
import './Projects.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {chosenItem: 0, width: window.innerWidth, height: window.innerHeight, modalVisible: false,
    modalTitle: null, modalDescription: null, modalMediaSrc: null, modalReport: null, modalMedia: null};
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

    var getReport = function(report) {
      return require(`./Documents/${report}`);
    }

    var getIcon = function(icon) {
      return require(`./Icons/${icon}`);
    }

    const new_projects = projects.map((data) => {
      return (
          <Grid.Column floated='left' width={7} style={{margin: '10px', border: '1px solid rgba(255, 255, 255, 0.08)'}}>
            {data.modal ? <div class="ribbon ribbon-top-right"><span>Click me!</span></div> : null}
            <Project open={this.state.modalVisible} handleClose={() => this.handleClose()}
            media={this.state.modalMedia} mediaSrc={this.state.modalMediaSrc} 
            title={this.state.modalTitle} description={this.state.modalDescription}
            report={this.state.modalReport}/>
            <Item className={data.modal ? 'clickable' : ''} onClick={data.modal ? () => {
              this.changeState(data.id); this.setState({modalVisible: !this.state.modalVisible,
                modalReport: data.report, modalTitle: data.title, modalDescription: data.modal_description,
                modalMedia: data.media, modalMediaSrc: data.media_src
              })} : {}}>
              <Item.Content style={styles.content} className='contenta'>
                  <Item.Header>
                      <h1 style={{color: '#3399FF'}}>{data.title}</h1>
                  </Item.Header>
                  <Item.Description style={{width: "75%"}}>
                      <p style={{fontSize: '1.2em'}}>{data.description}</p>
                  </Item.Description>
                  <Item.Extra>
                    <div style={{display: "flex", flexDirection: "column"}}>
                      {(data.report != null) ? <a style={{color: '#3399FF'}} href={getReport(data.report)} target="_blank" rel="noopener noreferrer">Open report</a> : null}
                      {(data.extra_link.text != null) ? <a style={{color: '#3399FF'}} href={data.extra_link.link} target="_blank" rel="noopener noreferrer">{data.extra_link.text}</a> : null}
                      <div className='icons'>
                        {data.icons.map(icon => 
                          <SVG src={getIcon(icon)}/>
                        )}
                      </div>
                    </div>
                  </Item.Extra>
              </Item.Content>
            </Item>
          </Grid.Column>
      )
    });

    return (
      <div style={{overflowY: 'auto', overflowX: 'hidden'}} id="scrollstyle" className='override'>
        <Grid stackable centered columns={2} padded='horizontally' style={{marginTop: '1px'}}>
            {new_projects}
            <Grid.Column width={7} style={{margin: '10px'}}>
            </Grid.Column>
        </Grid>
      </div>
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
    content: {
      color: 'white',
      overflow: 'hidden',
      textAlign: 'left',
      justifyContent: 'space-between',
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
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