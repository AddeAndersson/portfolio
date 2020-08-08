import React, { Component } from 'react'
import './Projects.css'
import { Modal, Header, Grid, Embed } from 'semantic-ui-react'

export default class Project extends Component {
  render() {
    return (
      <Modal
      	basic
        open={this.props.open}
        onClose={this.props.handleClose}
        size='large'
        style={styles.modal}
        className={'center'}
      >
        <Header content={this.props.title} style={{textAlign: 'center'}}/>
        <Modal.Content>
	        <Grid centered columns={1}>
	        	<Grid.Column>
			        {this.props.media === 'video' ? 
			           <Embed
					    id='iTWdN_GpJhw'
					    placeholder='Preview'
					    source='youtube'
					    width='100%'
					   /> : 
			           <img alt='' style={{width: '100%'}} src={this.props.mediaSrc}/>
			        }
	        	</Grid.Column>
	        </Grid>
        </Modal.Content>
      </Modal>
    )
  }
}

const styles = {
  modal: {
  	height: 'auto',
  	left: 'auto',
  	right: 'auto',
  	top: 'auto',
  	bottom: 'auto',
  	justifyContent: 'center',
  }
}