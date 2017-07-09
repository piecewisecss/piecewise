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
    let { width } = this.state, 
        calc = `24px + ((${width}px - 480px) / (1000px - 480px)) / (48px - 24px)`,
        eqTop = <div className='eqTop'>(<span>{width + 'px'}</span> - 480px)</div>,
        eqMid = `(1000px - 480px)`,
        eqBot = `(48px - 24px)`,
        finalCalc = (24 + (width - 480) / ((1000 - 480) / (48 - 24))).toString().split('.')[0] + '.' + (24 + (width - 480) / ((1000 - 480) / (48 - 24))).toString().split('.')[1].substring(0, 2) + ((24 + (width - 480) / ((1000 - 480) / (48 - 24))).toString().split('.')[1].substring(0, 2).length == 1 ? '0' : '') + 'px'
    return (
      <div className='functionBox'>
        <div className='currentWidth'>{width + 'px'}</div>
        <div className='calc'>
          <div className='calcTop'>
            <div className='topLeft left'>f(x) =</div>
            <div className='topMid mid'>48px</div>
            <div className='topRight right'>48px</div>
          </div>
          <div className='calcMid'>
            <div className='midLeft left noSelect'>f(x) =</div>
            <div className='midMid mid'>
              <div className='base'>24px +</div>
              <div className='equation'>
                {eqTop}
                <div className='eqMid'>{eqMid}</div>
                <div className='eqBot'>{eqBot}</div>
              </div>
            </div>
            <div className='midRight right'>{finalCalc}</div>
          </div>
          <div className='calcBot'>
            <div className='botLeft left noSelect'>f(x) =</div>
            <div className='botMid mid'>24px</div>
            <div className='botRight right'>24px</div>
          </div>
        </div>
        <WindowResizeListener onResize={windowSize => this.setState({ width: windowSize.windowWidth })}/>
      </div>
    )
  }
}
