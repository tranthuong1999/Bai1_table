import React, { Component } from 'react'


class index extends Component {


    constructor(props) {
        super(props);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps:', nextProps);
    //     const { index } = nextProps;
    //     if (index === 4) {
    //         alert('Limit roi e nhe');
    //     }
    // }

    //it dung,dùng phải cẩn thận 
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.index == 4) {
            return false;
        }
        return true;
    }


    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps:', props);
        return null;
    }

    render() {
        const { index } = this.props;
        console.log('Render:', index)
        return <div>
            Child {index}
        </div>
    }



}
export default index;