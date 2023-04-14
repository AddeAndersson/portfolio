import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import './Fonts.css';
import { Document, Page, pdfjs } from 'react-pdf';
import CV from './Documents/adrianandersson.pdf';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class MyCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight, numPages: 2, pageNumber: 1};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.changePage = this.changePage.bind(this);
    this.getPDFsize = this.getPDFsize.bind(this);
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

  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({numPages});
  }

  changePage() {
    if(this.state.pageNumber === 2) {
      this.setState({pageNumber: 1})
    }
    else {
       this.setState({pageNumber: this.state.pageNumber+1});
    }
   
  }

  getPDFsize(num) {
    if(num > 900) {
      return 900;
    }
    else {
      return num;
    }
  }

  render() {
    
    const autoHeight = {
      height: Math.round(0.90*this.state.height),
      width: this.state.width,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '20px 0px 20px 0px',
    };

    const scrollable = {
      height: Math.round(0.90*this.state.height),
      width: this.state.width,
      display: 'flex',
      flexDirection: 'column',
      WebkitAlignItems: 'center',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
      overflowY: 'scroll',
      padding: '20px 0px 20px 0px',
    };

    return(
      <div style={styles.carousel}>
        <Carousel autoPlay={false} useKeyboardArrows={false} showThumbs={false} infiniteLoop={true} axis={'vertical'}
        interval={5000} transitionTime={800} selectedItem={this.props.item} showArrows={false} showStatus={false}
        showIndicators={false} swipeable={false} swipeScrollTolerance={100000}>
      
          {/*0*/}
          <div style={autoHeight}>
            <Home/>
          </div>
          
          {/*1*/}
          <div style={autoHeight}>
            <About/>
          </div>

          {/*2*/}
          <div style={autoHeight}>
            <Projects/>
          </div>

          {/*3*/}
          <div id="scrollstyle" style={scrollable} onClick={this.changePage}>
            <Document file={CV} onLoadSuccess={this.onDocumentLoadSuccess} onLoadError={console.error}>
              {Array.from(new Array(this.state.numPages), (el, index) => 
                (<Page className="row" height={this.getPDFsize(this.state.width)}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                />),
                )
              }
            </Document>
          </div>
        </Carousel>
      </div>
    );
  }

}

export default MyCarousel;



const styles = {
    carousel: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'none',
      overflow: 'visible',
      height: '90%',
    }
};