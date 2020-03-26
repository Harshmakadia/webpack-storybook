import React from 'react'
import './avatar.css'

class Avatar extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.img} className={this.props.className + (this.props.circle ? ' ui-kit-rounded-avatar' : '')} height={this.props.height} width={this.props.width} alt={this.props.altText} />
      </div>
    )
  }
}

Avatar.defaultProps = {
  img: '',
  altText: 'User Icon',
  className: '',
  width: 60,
  height: 60,
  circle: false
}

export default Avatar;