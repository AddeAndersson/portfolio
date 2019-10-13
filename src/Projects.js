import React, {Component} from 'react';
import './Fonts.css';

class Home extends Component {

  render() {

    const code = '<code/>';
    const preview = '<preview/>';

    return(
    	 <ul id="scrollstyle" style={styles.container}>
          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Vacuum Hero</h1>
              <p>
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
          
          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Evaari</h1>
              <p>
                A RTS-styled VR game made in Unity.
              </p>
              <p>
                <a style={styles.inactiveLink}>
                    {code}
                </a>
                <a style={styles.activeLink} href='https://www.youtube.com/watch?v=h8h2IKuRL4c'>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Monte-Carlo Ray tracer</h1>
              <p>
                An ongoing project to render a simple scene
                containing Lambertian and Oren-Nayar reflectors in
                addition to transparent and perfectly reflecting objects.
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/MonteCarlo'>
                    {code}
                </a>
                <a style={styles.inactiveLink}>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={styles.item}> 
              <h1 style={{color: '#3399FF'}}>Handwritten Number Identification</h1>
              <p>
                A MatLab program made to identify handwritten
                numbers using different algorithms.
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
          
          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Lego Searcher</h1>
              <p>
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

          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Biljard Simulation</h1>
              <p>
                A short video as a result of simulating the initial
                hit in a game of biljard.
              </p>
              <p>
                <a style={styles.activeLink} href='https://github.com/AddeAndersson/TNM085'>
                    {code}
                </a>
                <a style={styles.activeLink} href='https://www.youtube.com/watch?v=iTWdN_GpJhw'>
                    {preview}
                </a>
              </p>
          </li>

          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Shortest Path Through Ulam Spiral</h1>
              <p>
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
          
          <li style={styles.item}>
              <h1 style={{color: '#3399FF'}}>Online Portfolio</h1>
              <p>You are looking at it!</p>
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
      padding: 0,
      overflowY: 'scroll',
    },
  item: {
      flex: '0 0 auto',
      //boxShadow: '0 0 10px rgba(0, 164, 213, 0.6)',
      //WebKitBoxShadow: '0 0 10px rgba(0, 164, 213, 0.6)',
      margin: '10px',
      height: '40vh',
      width: '40vh',
      padding: '5px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: 'calc((3vh + 0.5vw)/2)',
      backgroundColor: '#292726',
      borderRadius: '50px 20px',
      color: 'white',
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