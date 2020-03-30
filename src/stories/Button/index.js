import React from 'react';
import  Button  from '../../components/Button/button';




class ButtonStory extends React.Component {
    constructor() {
        super()
        this.state = {}
    };

    render() {
        return (
            <Button
                    disabled={this.props.disabled}
                    type={this.props.type}
                    variant={this.props.variant}
                    onClick={this.props.handleClick}
                    onFocus={this.props.handleInputFocus} 
                    onBlur={this.props.handleInputBlur}
                    // buttonRef={ref => this.props.addRef(ref)}
                    fullWidth={this.props.fullWidth !== "undefined" ? this.props.fullWidth : false}
                    disableRipple={this.props.type === "link"}
                    btnText={this.props.btnText}>       
            </Button>
        )
    }
}

ButtonStory.defaultProps = {
    disabled: '',
    type: 'short',
    variant:'outlined',
    fullWidth:'true',
    btnText:'Button',
    fullWidth:''
}

export default ButtonStory