import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../Image-Results/Image-Results';

class Search extends Component {
  state = {
  textInput: '',
  apiUrl: 'https://pixabay.com/api/docs/',
  apiKey: '8993434-402046bf406a08943d0fc8de4',
  number: 5,
  images: []
  };
 onTextChange = (e) => {
 this.setState({ textInput: e.target.value }, async () => {
   const resDATA = await fetch(`https://pixabay.com/api/?key=${this.state.apiKey}&q=${this.state.textInput}&per_page=${this.state.number}&image_type=photo`)
   const response = await resDATA.json()
   this.setState({ images: response.hits })
 })
 };
 selectNumberChange = (e, index, value) => {
   this.setState({ number: value })
 };
 render() {
   return (
   <div>
        <TextField
        value={this.state.textInput}
        onChange={this.onTextChange}
        hintText="Image name..."
        floatingLabelText="Search for images"
        />
        <br/>
        <SelectField
          floatingLabelText="Frequency"
          value={this.state.number}
          onChange={this.selectNumberChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
        {this.state.images.length > 0 && this.state.textInput !== '' ? <ImageResults 
          images={this.state.images}
          /> : null}
   </div>
   );
 };
};
export default Search;