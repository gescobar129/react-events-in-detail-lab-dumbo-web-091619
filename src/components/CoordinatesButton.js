// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  handleOnClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render() {
    return(
      <div>
        <button onClick={this.handleOnClick}>Coordinates</button>

      </div>
    )
  }
}

export default CoordinatesButton