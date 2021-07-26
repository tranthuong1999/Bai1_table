import React, { Component } from 'react'

class index extends Component {

    render() {
        const { text, backgroundColor, onClick } = this.props;
        return (
            <div
                style={{ width: 100, height: 40, backgroundColor: backgroundColor || '#cacaca', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
                onClick={() => onClick && onClick()}
            >
                {text}
            </div>
        )
    }
}

export default index