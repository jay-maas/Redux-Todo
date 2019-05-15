import React from 'react'
import {
    connect
} from 'react-redux'
import {
    updateTitle
} from '../actions'
import seaStar from '../assets/images/seaStar.png'

class Title extends React.Component {
    state = {
        newTitle: this.props.title,
        editing: false
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateTitle = e => {
        e.preventDefault()
        this.props.updateTitle(this.state.newTitle)
        this.setState({
            editing: false
        })
    }
    render() {
        // let input = document.querySelector('input'); // get the input element
        // input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
        // resizeInput.call(input); // immediately call the function

        // function resizeInput() {
        //     this.style.width = this.value.length + "ch";
        // }
        return ( <
            div style = {
                {
                    position: 'relative'
                }
            } > {
                !this.state.editing ? ( <
                    h1 style = {
                        {
                            textShadow: '11px 4px 10px black',
                            fontSize: '3em',
                            margin: '0'
                        }
                    }
                    onClick = {
                        () => this.setState({
                            editing: true
                        })
                    } > {
                        this.props.title
                    } < /h1>
                ) : ( <
                    >
                    <
                    input className = "Input"
                    type = "text"
                    name = "newTitle"
                    value = {
                        this.state.newTitle
                    }
                    onChange = {
                        this.handleChanges
                    }
                    /> <
                    img src = {
                        seaStar
                    }
                    alt = 'seaStart'
                    style = {
                        {
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            width: '20%',
                            height: 'auto'
                        }
                    }
                    onClick = {
                        this.updateTitle
                    }
                    /> <
                    />
                )
            } <
            /div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.title
    }
}

export default connect(
    mapStateToProps, {
        updateTitle
    }
)(Title)