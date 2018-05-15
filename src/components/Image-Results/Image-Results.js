import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';

class ImageResults extends Component {
  constructor(props){
    super()
}
state = {
  open: false,
  currentImg: ''
}
handleClose = () => this.setState({ open: false })
handleClick = (img) => this.setState({ open: true, currentImg: img })
  render(props) {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
    <div>
    <GridList cols={3} >
    {this.props.images.map(img => 
    <GridTile
    title={img.tags}
    key={img.id}
    subtitle={<span> by <p>{img.user}</p></span>}
    actionIcon={<IconButton onClick={() => this.handleClick(img.webformatURL)}>
                <ZoomIn 
                color="blue"
                />
                </IconButton>}
    >
    <img src={img.largeImageURL} alt="not found" ></img>
    </GridTile>
    )}
    </GridList>
    <Dialog
          
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="not found!" style={{width:'100%'}}></img>
    </Dialog>
    </div>
    );
  };
};

export default ImageResults;