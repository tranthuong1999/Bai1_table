import React, { Component } from 'react'
import Child1 from './Child1.js';
import Child2 from './Child2.js';
import FunctionalComponent from '../FunctionalComponent';
import Flexbox from '../Flexbox';
class index extends Component {


    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        // console.log('1111: constuctor');
    }

    // componentWillMount() {
    //     console.log('2222: componentWillMount');
    // }

    // componentDidMount() {
    //     console.log('4444: componentDidMount');
    // }

    render() {
        const { index } = this.state;
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <div style={{ width: 300, height: 300, borderWidth: 1, borderColor: '#cacaca', backgroundColor: '#cacaca' }}>
                <button onClick={() => this.setState({ index: index + 1 })}>Click</button>
                <div>Index {index}</div>
                <div>---------------------</div>
                {
                    index < 2 &&
                    <Child1 />
                }
                <Child2 index={index} />
                <FunctionalComponent index={index} />
                <Flexbox index={index} />
            </div>
        </div>
    }



}
export default index;