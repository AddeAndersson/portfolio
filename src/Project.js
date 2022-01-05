import React from 'react'
import './Projects.css'
import './Fonts.css'
import { Modal, Header, Grid, Embed, Button, Icon } from 'semantic-ui-react'

export default function Project(props) {

    var getImage = function(image) {
      return props.mediaSrc != null ? require(`./Images/${image}`) : null;
    }

    var getReport = function(report) {
      return report == null ? "" : require(`./Documents/${report}`);
    }

    return (
      <Modal
      	basic
        open={props.open}
        onClose={props.handleClose}
        size='small'
        style={styles.modal}
        className={'center'}
        id="scrollstyle"
      >
        <Header content={props.title} style={{textAlign: 'center'}}/>
        <Modal.Content scrolling id="scrollstyle">
	        <Grid centered columns={1}>
	        	<Grid.Column textAlign='center'>
	        		<p style={{textAlign: 'left'}}>{props.description}</p>
			        {
                props.media === 'video' ? 
			           <Embed
    					    id={props.mediaSrc}
    					    source='youtube'
    					    width='100%'
    					   /> :
			           <img alt='' style={{width: '75%'}} src={getImage(props.mediaSrc)}/>
			        }
	        	</Grid.Column>
	        </Grid>
        </Modal.Content>
        <Modal.Actions>
        	<a href={getReport(props.report)} target="_blank" rel="noopener noreferrer">
		        <Button color='blue' onClick={() => {}}>
		          <Icon name='file text' /> Read report
		        </Button>
	        </a>
	        <Button color='red' onClick={() => {props.handleClose()}}>
	          <Icon name='remove' /> Close
	        </Button>
	      </Modal.Actions>
      </Modal>
    )
  
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