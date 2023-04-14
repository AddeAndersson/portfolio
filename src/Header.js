import React, { Component } from 'react';
import MyCarousel from './MyCarousel.js';
import './Header.css';
import 'react-responsive-carousel/lib/styles/carousel.css';
import linkedin_icon from './Icons/linkedin.svg';
import github_icon from './Icons/github.svg';
import SVG from 'react-inlinesvg';
import { Menu, Dropdown } from 'semantic-ui-react';
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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  isActive(item) {
    if(this.state.chosenItem === item) return styles.active;
    else return styles.inactive;
  }

  render() {
    if(this.state.width > 910)
    {
      return(
        	<div style={styles.container}>
            <Menu style={{background: 'none', fontSize: '2em'}}>
              <Menu.Menu stackable position='left'>
          			<Menu.Item class="itemClass" style={this.isActive(0)} onClick={() => this.setState({chosenItem: 0})}>
          			  Home
          			</Menu.Item>
          			<Menu.Item class="itemClass" style={this.isActive(1)} onClick={() => this.setState({chosenItem: 1})}>
          				About
          			</Menu.Item>
          			<Menu.Item class="itemClass" style={this.isActive(2)} onClick={() => this.setState({chosenItem: 2})}>
          				Projects
          			</Menu.Item>
                <Menu.Item class="itemClass" style={this.isActive(3)} onClick={() => this.setState({chosenItem: 3})}>
                  CV
                </Menu.Item>
              </Menu.Menu>
              <Menu.Menu position='right' style={{background: 'none', fontSize: '2rem'}}>
                <Menu.Item class="itemClass">
                  <a href='https://www.linkedin.com/in/adrian-andersson-410345149/' target="_blank" rel="noopener noreferrer">
                    <SVG height={Math.round(0.04*this.state.width)} src={linkedin_icon}/>
                  </a>
                </Menu.Item>
                <Menu.Item class="itemClass">
                  <a href='https://github.com/AddeAndersson' target="_blank" rel="noopener noreferrer">
                  <SVG height={Math.round(0.04*this.state.width)} src={github_icon}/>
                  </a>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <div style={styles.carContainer}>
              <MyCarousel item={this.state.chosenItem}/> 
            </div>
        	</div>
      );
    }
    else
    {
      return(
        	<div style={styles.container}>
            <Menu style={{background: 'none'}}>
              <Menu.Menu maxWidth={910}  position='left'>
                    <Dropdown
                        item
                        icon={{name: 'bars', color: 'blue', size: 'big'}}
                        style={{background: 'none'}}
                        >
                        <Dropdown.Menu style={{background: '#292726'}}>
                          <Dropdown.Item id={this.state.chosenItem === 0 ? 'active' : 'inactive'} style={this.isActive(0)} onClick={() => this.setState({chosenItem: 0})}>
                            Home
                          </Dropdown.Item>
                          <Dropdown.Item id={this.state.chosenItem === 1 ? 'active' : 'inactive'} style={this.isActive(1)} onClick={() => this.setState({chosenItem: 1})}>
                            About
                          </Dropdown.Item>
                          <Dropdown.Item id={this.state.chosenItem === 2 ? 'active' : 'inactive'} style={this.isActive(2)} onClick={() => this.setState({chosenItem: 2})}>
                            Projects
                          </Dropdown.Item>
                          <Dropdown.Item id={this.state.chosenItem === 3 ? 'active' : 'inactive'} style={this.isActive(3)} onClick={() => this.setState({chosenItem: 3})}>
                            CV
                          </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
                <Menu.Menu position='right' style={{background: 'none'}}>
                  <Menu.Item class="itemClass">
                    <a href='https://www.linkedin.com/in/adrian-andersson-410345149/' target="_blank" rel="noopener noreferrer">
                      <SVG height={Math.round(0.04*this.state.width)} src={linkedin_icon}/>
                    </a>
                  </Menu.Item>
                  <Menu.Item class="itemClass">
                    <a href='https://github.com/AddeAndersson' target="_blank" rel="noopener noreferrer">
                    <SVG height={Math.round(0.04*this.state.width)} src={github_icon}/>
                    </a>
                  </Menu.Item>
                </Menu.Menu>
            </Menu>
            <div style={styles.carContainer}>
              <MyCarousel item={this.state.chosenItem}/> 
            </div>
        </div>
      );
    }
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
    backgroundColor: '#292726'
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
      overflow: 'visible',
      paddingTop: 10
  },

  inactive: {
      color: 'white',
      cursor: 'pointer',
      background: 'none'
  },

  active: {
      color: 'rgb(51, 153, 255)',
      cursor: 'default',
      background: 'none'
  }
}

