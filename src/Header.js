import React, {Component} from 'react';
import MyCarousel from './MyCarousel.js';
import './Header.css';
import "react-responsive-carousel/lib/styles/carousel.css";
import SVG from 'react-inlinesvg';
import Particles from 'react-particles-js';

class Header extends Component {

  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
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

  isActive(item) {
    const active = {
          color: '#00CCFF',
          float: 'left',
          cursor: 'default',
          fontSize: Math.round(0.03*this.state.height),
    };
    const inactive = {
          color: "black",
          float: 'left',
          cursor: 'pointer',
          fontSize: Math.round(0.03*this.state.height),
    };
    if(this.state.chosenItem === item) return active;
    else return inactive;
}



  render() {

      const liSocials = {
            color: 'white',
            cursor: 'pointer',
            float: 'right',
            height: this.state.height*0.03,
            width: this.state.height*0.03,
      };

      const parParam = {
        "particles": {
                  "number": {
                        "value": Math.round(this.state.height*this.state.width*0.00005)
                  },
                  "size": {
                        "value": 4
                  },
                  "color": {
                        "value": ['#00CCFF']
                  },
                  "opacity": {
                        "value": 0.9,
                        "random": false,
                        "anim": {
                            "opacity_min": 0.6,
                        }, 
                  },
                  "shape": {
                        "type": "polygon",
                        "polygon": {
                            "nb_slides": 5
                        },
                        "stroke": {
                            "width": 0,
                        }
                  },
                  "line_linked": {
                        "color": "#000000",
                        "opacity": 0.8,
                  },
                  "move": {
                        "speed": 2,
                  },
        },


        "interactivity": {
                  "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "repulse"
                        },
                    }
        }
      }

      return(
        	<div style={styles.container}>
              <ul className="ul">
          			<li style={this.isActive(0)} onClick={() => this.setState({chosenItem: 0})}>
          			  Home
          			</li>
          			<li style={this.isActive(1)} onClick={() => this.setState({chosenItem: 1})}>
          				About
          			</li>
          			<li style={this.isActive(2)} onClick={() => this.setState({chosenItem: 2})}>
          				Projects
          			</li>
                <li style={this.isActive(3)} onClick={() => this.setState({chosenItem: 3})}>
                  CV
                </li>
                <li style={liSocials}>
                  <a href='https://www.linkedin.com/in/adrian-andersson-410345149/'>
                    <SVG src='https://image.flaticon.com/icons/svg/733/733617.svg'/> {/*LinkedIn svg*/}
                  </a>
                </li>
                <li style={liSocials}>
                  <a href='https://github.com/AddeAndersson'>
                    <SVG src='https://image.flaticon.com/icons/svg/733/733609.svg'/> {/*GitHub svg*/}
                  </a>
                </li>
              </ul>
            <div style={styles.carContainer}>
              <MyCarousel item={this.state.chosenItem}/>
              <Particles className="particlesFade" height={this.state.height} width={this.state.width} style={styles.particleWrapper} params={parParam}/>
              <div style={styles.footer}>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        	</div>
      );	
  }
}

export default Header;

const styles = {
  container: {
    float: 'right',
    height: '100vh',
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },

  carContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      flex: 1,
      backgroundColor: 'none',
      zIndex: 10,
      position: 'relative',
  },

  particleWrapper: {
      zIndex: -10,
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'none',
  },

  footer: {
      height: 20,
      padding: 0,
      margin: 'auto',
      zIndex: 1,
      fontSize: 15,
  },
};

