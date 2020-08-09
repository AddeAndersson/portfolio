import React, {Component} from 'react';
import './Home.css';
import * as THREE from 'three'

class Home extends Component {

  componentDidMount() {

    //THREE
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    // Torus
    /*var geometry = new THREE.TorusGeometry(10, 4, 16, 100);
    var material = new THREE.PointsMaterial({ color: 0x3399FF }); material.size = 0.1;
    var torus = new THREE.Points(geometry, material);
    torus.position.x += 7;
    torus.rotation.y -= Math.PI/4;
    scene.add(torus);*/

    // Outer cube
    var geo = new THREE.BoxGeometry(20, 20, 20, 15, 15, 15);
    var mat = new THREE.PointsMaterial({ color: 0x3399FF }); mat.size = 0.1;
    var box = new THREE.Points(geo, mat);
    box.position.x += 7;
    box.rotation.y -= Math.PI/4;
    scene.add(box);

    // Inner cube
    /*var geo_inner = new THREE.BoxGeometry(10, 10, 10, 7, 7, 7);
    var mat_inner = new THREE.PointsMaterial({ color: 0x3399FF }); mat_inner.size = 0.1;
    var box_inner = new THREE.Points(geo_inner, mat_inner);
    box_inner.position.x += 7;
    box_inner.rotation.y -= Math.PI/4;
    scene.add(box_inner);*/

    camera.position.z = 30;

    var animate = function() {
      requestAnimationFrame(animate);
      //torus.rotation.z += 0.005;
      box.rotation.y += 0.005;
      //box_inner.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return(
   	  <div>
        <div style={styles.particleWrapper} ref={ref => (this.mount = ref)}/>
      	<div className='css-typing' style={styles.homescreenTitle}>
      		<p>Hi there,</p> 
        	<p>I'm Adrian.</p>
        </div>
        <p className='fadein' style={styles.homescreenPara}>
              Welcome to my online portfolio. I am a M.Sc.
              Student  in Media Technology and Engineering
              at Linköping University.
        </p>
      </div>
    );
  }
}

export default Home;

const styles = {
	homescreenTitle: {
      color: 'white',
      fontSize: 'calc((7vh + 15vw)/2)',
      textAlign: 'left',
      justifyContent: 'start',
      float: 'left',
      width: '60%',
      lineHeight: 1.2,
      marginLeft: '30px',
      padding: 0,
    },
    homescreenPara: {
      color: 'grey',
      fontSize: 'calc((3vh + 3vw)/2)',
      textAlign: 'left',
      float: 'left',
      width: '60%',
      marginLeft: '30px',
    },
    particleWrapper: {
      zIndex: -10,
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'none',
  },
};