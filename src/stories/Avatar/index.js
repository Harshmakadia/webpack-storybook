/*
 * Copyright © 2014-2018 Zuru Tech HK Limited and Archbox S.r.l., All rights reserved.
 */
import React from 'react'
import  Avatar  from '../../components/Avatar/avatar';

class AvatarStory extends React.Component {
    constructor() {
        super()
        this.state = {}
    };

    render() {
        return (
            <Avatar img={this.props.img} className={this.props.className + (this.props.circle ? ' avtar-circle' : '')} height={this.props.height} width={this.props.width} circle={this.props.circle} altText={this.props.altText} />
        )
    }
}
AvatarStory.defaultProps = {
    img: '',
    altText: 'User Icon',
    className: 'test-avater',
    width: 60,
    height: 60,
    circle: false
}
export default AvatarStory