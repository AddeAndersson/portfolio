import React, {Component} from 'react';
import './Fonts.css';

class Home extends Component {

  render() {

    const code = '<code/>';
    const preview = '<preview/>';

    return(
    	 <ul id="scrollstyle" style={styles.container}>
          <li style={styles.item}>
              <h1>Vacuum Hero</h1>
              <p>
                A racing game where the player controls a vacuum machine
                to collect exams in order to get points. The game takes
                place in a 3D model of Täppan in campus Norrköping.
              </p>
              <p>
                <a>
                    {code}
                </a>
                <a>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={styles.item}>
              <h1>Evaari</h1>
              <p>
                A RTS-styled VR game made in Unity.
              </p>
              <p>
                <a>
                    {code}
                </a>
                <a href='https://www.youtube.com/watch?v=h8h2IKuRL4c'>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={styles.item}>
              <h1>Monte-Carlo Ray tracer</h1>
              <p>
                An ongoing project to render a simple scene
                containing Lambertian and Oren-Nayar reflectors in
                addition to transparent and perfectly reflecting objects.
              </p>
              <p>
                <a>
                    {code}
                </a>
                <a>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={styles.item}> 
              <h1>Handwritten Number Identification</h1>
              <p>
                A MatLab program made to identify handwritten
                numbers using different algorithms.
              </p>
              <p>
                <a href='https://github.com/AddeAndersson/NumberIdentification'>
                    {code}
                </a>
                <a>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={styles.item}>
              <h1>Lego Searcher</h1>
              <p>
                A website to browse through a database of lego pieces
                in order to see which set contains that piece.
              </p>
              <p>
                <a href='https://github.com/AddeAndersson/LegoSearcher'>
                    {code}
                </a>
                <a href='http://www.student.itn.liu.se/~adran117/tnmk30/LegoProject/startpage.php'>
                    {preview}
                </a>
              </p>
          </li>

          <li style={styles.item}>
              <h1>Biljard Simulation</h1>
              <p>
                A short video as a result of simulating the initial
                hit in a game of biljard.
              </p>
              <p>
                <a href='https://github.com/AddeAndersson/TNM085'>
                    {code}
                </a>
                <a href='https://www.youtube.com/watch?v=iTWdN_GpJhw'>
                    {preview}
                </a>
              </p>
          </li>

          <li style={styles.item}>
              <h1>Shortest Path Through Ulam Spiral</h1>
              <p>
                A breadth-first search algorithm to find the shortest path between to
                integers in an Ulam spiral. Prime numbers act as obstacles.
              </p>
              <p>
                <a href='https://github.com/AddeAndersson/UlamBFS'>
                    {code}
                </a>
                <a>
                    {preview}
                </a>
              </p>
          </li>
          
          <li style={styles.item}>
              <h1>Online Portfolio</h1>
              <p>You are looking at it.</p>
              <p>
                <a href='https://github.com/AddeAndersson/portfolio'>
                    {code}
                </a>
                <a>
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
      boxShadow: '0 0 10px rgba(0, 149, 255, 0.6)',
      WebKitBoxShadow: '0 0 10px rgba(0, 149, 255, 0.6)',
      margin: '10px',
      height: '40vh',
      width: '40vh',
      padding: '5px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: 'calc((3vh + 0.5vw)/2)',
    },
};