import React, { Component } from 'react';

import { Button } from 'office-ui-fabric-react';

export default class DynamicControl extends Component {
  render(){
    return(
      
      <div id="parentDiv">
        <Button>Add Control</Button>           
      </div>
    )
  }
}