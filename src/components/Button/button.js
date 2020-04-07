import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import {CONSTANTS} from "../../utils/constants";
// import variables from "../../scss/abstracts/variables.scss";
// import PropTypes from 'prop-types';
import buttonStyle from './button.scss';

const style = theme => ({
    commonBtnStyle: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 'normal',
        // borderRadius: variables.flowBuilderBorderRadius,
        textTransform: 'capitalize',
        // fontFamily: process.env.THEME_FONT_FAMILY_BOOK,
        transition: 'all 0.3s'
    },
    longButton: {
        background: "#2a7cff",
        color: "white",
        width:'100%',
        // color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR + ' !important',
        // border: 'none',
        border: '1px solid #2A7CFF',
        '&:hover': {
            background: "#166ffe"
        },
        '&:disabled': {
            background: "#e8e9ef",
            border: 'none',
            color: "#b1b8bb" + ' !important'
        }
    },
    shortButton: {
        padding: '0px 15px',
        height: "36px",
        background: "#2a7cff",
        color: 'white',
        // color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        border: '1px solid #2A7CFF',
        '&:hover': {
            background: "#166ffe"
        },
        '&:disabled': {
            background: "#e8e9ef",
            border: 'none',
            color: "#b1b8bb"
        }
    },
    alertButton: {
        padding: '0px 15px',
        height: "36px",
        background: '#ff0000',
        color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        border: 'none',
        '&:hover': {
            background: '#ec0000'
        },
        '&:disabled': {
            background: "#e8e9ef",
            border: 'none',
            color: "#b1b8bb"
        }
    },
    outlinedButton: {
        padding: '0px 15px',
        height: "36px",
        background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        color: "#2a7cff",
        border: '1px solid ' + "#2a7cff",
        '&:hover': {
            color: "#2a7cff",
            background: "#bedbfc"
        },
        '&:disabled': {
            background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
            border: 'solid 1px #e8e9ef',
            color: "#e8e9ef"
        },
        '&:active':{
            background: "#166ffe",
            border: '1px solid'+ "#2a7cff",
            color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR
        }
    },
    linkButton: {
        padding: '0',
        margin: '11px 0',
        minWidth: 'initial',
        minHeight: 'initial',
        background: 'transparent',
        color: "#2a7cff",
        border: 'none',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            background: 'transparent'
        },
        '&:active': {
            textDecoration: 'underline',
            background: 'transparent'
        },
        '&:disabled': {
            textDecoration: 'none',
            background: 'transparent',
            color: "#b1b8bb"
        }
    },
    deleteButton: {
        padding: '0px 11px',
        height: "36px",
        background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        color: '#ff0000',
        border: '1px solid #ff0000',
        '&:hover': {
            color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
            background: '#ff0000',
            '& span img': {
                opacity: '1'
            }
        },
        '&:disabled': {
            background:"#e8e9ef",
            border: 'none',
            color: "#b1b8bb"
        }
    },
    lineButton: {
        padding: '0px 50px',
        height: "36px",
        background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        color: '#919ba0',
        border: 'dashed 1px #bdc4c8',
        '&:hover': {
            color: "#166ffe",
            border: 'dashed 1px ' + "#166ffe",
            background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR
        },
        '&:disabled': {
            border: 'dashed 1px #e8e9ef',
            color: "#b1b8bb",
            background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR
        }
    },
    iconButton: {
        padding: '0px 13px 0 7px',
        height: "auto",
        background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        color: "#2a7cff",
        border: '1px solid ' + "#2a7cff",
        '&:hover': {
            color: "#2a7cff",
            background: "#bedbfc"
        },
        '&:disabled': {
            background: "#2a7cff",
            border: 'solid 1px #e8e9ef',
            color: "#b1b8bb"
        }
    }
});

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    getButtonStyle(classes) {
        switch (this.props.type) {
            case "button":
                return classNames(classes. commonBtnStyle);
            case "long":
                return classNames(classes.longButton);
            case "short":
                return classNames(classes.shortButton);
            case "alert":
                return classNames(classes.alertButton);
            case "outlined":
                return classNames(classes.outlinedButton);
            case "link":
                return classNames(classes.linkButton);
            case "delete":
                return classNames(classes.deleteButton);
            case "line":
                return classNames(classes.lineButton);
            case "icon":
                return classNames(classes.iconButton);
            default:
                break;
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={`sssss ${buttonStyle.POP}`}>
                <Button
                    disabled={this.props.disabled}
                    className={this.getButtonStyle(classes) + ' ' + classNames(classes.commonBtnStyle)}
                    variant={this.props.variant}
                    onClick={this.props.handleClick}
                    onFocus={this.props.handleInputFocus} 
                    onBlur={this.props.handleInputBlur}
                    // buttonRef={ref => this.props.addRef(ref)}
                    fullWidth={this.props.fullWidth !== "undefined" ? this.props.fullWidth : false}
                    disableRipple={this.props.type === "link"}>
                    <span className={this.props.icon} style={{padding:"5px"}}>
                    {this.props.btnText}</span>                    
                </Button>
            </div>
        );
    }
}

// ButtonComponent.propTypes = {
//     // /**
//     //  * Use one of the button types
//     //  */
//     // Types:PropTypes.oneOf([['long','short','alert','outlined','link','delete','line','icon']]),
//     /**
//      * If true, the button will be disabled.
//      */
//     disabled:PropTypes.bool,
//     /**
//      * If 'true', the button will take up the full width of its container. 
//     */
//     fullWidth:PropTypes.bool,
//     /**
//      * The variant to use.
//      */
//     variant:PropTypes.oneOf(['text','contained','outlined']),
//     /**
//      *  Button's label
//      */
//     label: PropTypes.string.isRequired,
//     /**
//      * Click event handler
//      */
//     handleClick:PropTypes.func,
//     /**
//      * Perform onFocus event
//      */
//     onFocus:PropTypes.func,
//     /**
//      * onBlur event peforms
//      */
//     onBlur:PropTypes.func,
//     /**
//      * If true, the ripple effect will be disabled. ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the focusVisibleClassName
//      */
//     disableRipple:PropTypes.bool
//   };
// ButtonComponent.defaultProps = {
//     Types:'Long',
//     disabled: false,
//     fullWidth: false,
//     variant:'text',
//     disableRipple:true,
//     label:'Button'
// }; 


export  default withStyles(style)(ButtonComponent);