import React from 'react';

export default class npmInstall extends React.Component{
  constructor(props){
    super(props);
    this.state = { };
  }
  render(){
    // console.log('state', this.state);
    let text = 'npm install piecewisecss'
    return (
      <div className='npmInstall'>
        {text}
      </div>
    )
  }
}
