import React from 'react';
import { WindowResizeListener } from 'react-window-resize-listener'
WindowResizeListener.DEBOUNCE_TIME = 20;

export default class FunctionBox extends React.Component{
  constructor(props){
    super(props);
    this.state = { width: window.innerWidth };
  }
  render(){
    // console.log('state', this.state);
    let { width } = this.state, calc = `24px + ((${width}px - 480px) / (1200px - 480px)) / (48px - 24px) = ` + (24 + (width - 480) / (1200 - 480) / (48 - 24)).toString().split('.')[0] + 'px';
    return (
      <div className='functionBox'>
        <div className='currentWidth'>{width}</div>
        <div className='calc'>
          <div className='calcLeft'>f(x) =</div>
          <div className='calcRight'>
            <div className='calcTop' style={ width > 1199 ? {color: 'black'} : {color: 'grey'}}>48px</div>
            <div className='calcMid'>{ calc }</div>
            <div className='calcBot' style={ width < 481 ? {color: 'black'} : {color: 'grey'}}>24px</div>
          </div>
        </div>
        <WindowResizeListener onResize={windowSize => {
          {/*console.log('Window height', windowSize.windowHeight)*/}
          {/*console.log('Window width', windowSize.windowWidth)*/}
          this.setState({ width: windowSize.windowWidth });
        }}/>
      </div>
    )
  }
}
