import React, { Component } from 'react';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

class PinchGesture extends Component{
  constructor(props){
    super(props);
  }
  onPinchGestureEvent({nativeEvent}){
    if (nativeEvent.state === State.ACTIVE) {
      this.props.onPinchScreen(nativeEvent);
    }
  }
  render(){
    return (
      <PinchGestureHandler
        onGestureEvent={this.onPinchGestureEvent.bind(this)}>
        {this.props.children}
      </PinchGestureHandler>
    );
  }
}
export default PinchGesture;
