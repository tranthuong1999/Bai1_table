import React, { Component } from 'react'
import Button from './Button'

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentValue: 0
        }

    }

    onClickButton1() {
        const { currentValue } = this.state;
        console.log('Click 1 before: ', currentValue);
        this.setState({ currentValue: currentValue + 1 }, () => {
            console.log('Click 3 after: ', this.state.currentValue);
        })
        console.log('Click 1 after: ', this.state.currentValue);
    }
    onClickButton2() {
        console.log('Click 2');
        this.setState((prevState) => ({
            currentValue: prevState.currentValue - 1
        }));
    }

    render() {
        const { currentValue } = this.state;
        return (
            <div style={{ paddingLeft: 200 }}>
                <h1 id='title'>Props types</h1>
                <h2>Current value: {currentValue}</h2>
                <Button
                    text={'Button1'}
                    backgroundColor={'red'}
                    onClick={() => this.onClickButton1()}
                />
                <Button
                    text={'Button2'}
                    backgroundColor={'green'}
                    onClick={() => this.onClickButton2()}
                />
                <Button text={'Button3'} />
            </div>
        )
    }
}

export default index