import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import './Fonts.css';
import { Document, Page, pdfjs } from "react-pdf";
import CV from './Documents/adrianandersson.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class MyCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight, numPages: 2, pageNumber: 1};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.changePage = this.changePage.bind(this);
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

  render() {
    

    const autoHeight = {
      height: Math.round(0.92*this.state.height) - 20, //Header is 4% vw, footer is 20px
      width: this.state.width,
      display: 'flex',
      flexDirection: 'column',
      webkitAlignItems: 'center',
      justyfyContent: 'center',
      alignItems: 'center',
      flex: 1,
      overflow: "hidden",
    };

    const scrollable = {
      height: Math.round(0.92*this.state.height) - 20, //Header is 4% vw, footer is 20px
      width: this.state.width,
      display: 'flex',
      flexDirection: 'column',
      webkitAlignItems: 'center',
      justyfyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
      overflowY: 'auto',
    };

    return(
      <div className="carouselFade" style={styles.carousel}>
        <Carousel autoPlay={false} useKeyboardArrows={true} showThumbs={false} infiniteLoop={true} axis={'vertical'}
        interval={5000} transitionTime={800} selectedItem={this.props.item} showArrows={false} showStatus={false}
        showIndicators={false}>
      
          {/*0*/}
          <div style={autoHeight}>
            <p style={styles.text}>Home</p>
          </div>
          
          {/*1*/}
          <div style={autoHeight}>
            <p style={styles.text}>About</p>
          </div>

          {/*2*/}
          <div style={autoHeight}>
            <p style={styles.text}>Projects {this.state.height} {this.state.width}</p>
          </div>

          {/*3*/}
          <div id="scrollstyle" style={scrollable} onClick={this.changePage}>
            <Document file={CV} onLoadSuccess={this.onDocumentLoadSuccess} onLoadError={console.error}>
              {/*<Page className="page" height={0.85*this.state.height} pageNumber={this.state.pageNumber}/>*/}
              {
              //Display both pages
              Array.from(new Array(this.state.numPages), (el, index) => 
                (<Page className="row"
                key={`page_${index + 1}`}
                pageNumber={index + 1}
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
      overflow: 'hidden',
    },
    text: {
      color: 'black',
    },
    opaque: {
      opacity: '0',
    },
};