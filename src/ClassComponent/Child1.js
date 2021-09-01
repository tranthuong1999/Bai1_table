import React, { Component } from 'react'


class index extends Component {


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Child1: componentWillMount');
    }

    componentDidMount() {
        console.log('Child1: componentDidMount');
    }

    componentWillUnmount() {
        console.log('Child1: componentWillUnmount');
    }

    render() {
        console.log('Child1: render');
        return <div>
            Child 1
        </div>
    }



}
export default index;