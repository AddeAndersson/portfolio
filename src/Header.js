import React, {Component} from 'react';
import MyCarousel from './MyCarousel.js';
import './Header.css';
import 'react-responsive-carousel/lib/styles/carousel.css';
//import * as THREE from 'three';

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

    //THREE
    /*var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.TorusGeometry(10, 4, 16, 100);
    var material = new THREE.PointsMaterial({ color: 0x3399FF }); material.size = 0.1;
    var torus = new THREE.Points(geometry, material);
    torus.position.x += 7;
    torus.rotation.y -= Math.PI/4;
    scene.add(torus);

    camera.position.z = 30;

    var animate = function() {
      requestAnimationFrame(animate);
      torus.rotation.z += 0.005;

      renderer.render(scene, camera);
    };

    animate();*/
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  isActive(item) {
    const active = {
          color: '#3399FF',
          float: 'left',
          cursor: 'default',
          fontSize: Math.round(0.03*this.state.height),
    };
    const inactive = {
          color: "white",
          float: 'left',
          cursor: 'pointer',
          fontSize: Math.round(0.03*this.state.height),
    };
    if(this.state.chosenItem === item) return active;
    else return inactive;
}

  render() {

      /*const liSocials = {
            cursor: 'pointer',
            float: 'right',
      };*/

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
                {/*<li style={liSocials}>
                  <a href='https://www.linkedin.com/in/adrian-andersson-410345149/'>
                    <SVG height={Math.round(0.03*this.state.height)} src={linkedin}/>
                  </a>
                </li>
                <li style={liSocials}>
                  <a href='https://github.com/AddeAndersson'>
                    <SVG height={Math.round(0.03*this.state.height)} src={github}/>
                  </a>
                </li>*/}
              </ul>
            <div style={styles.carContainer}>
            {/*<div style={styles.particleWrapper} ref={ref => (this.mount = ref)}/>*/}
              <MyCarousel item={this.state.chosenItem}/>
              
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
      overflow: 'visible'
  },

  particleWrapper: {
      zIndex: -10,
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'none',
  },
};

