// import React, { Component } from 'react'


// class index extends Component {
//     render() {
//         const { isLastItem, onClick, title } = this.props;
//         return <div
//             className={isLastItem ? 'canculator_bottom_right_item canculator_bottom_right_item_last' : 'canculator_bottom_right_item'}
//             onClick={() => onClick && onClick()} // =-> nếu onClick tồn tại thì mới gọi hàm
//         >{title}</div>
//     }

// }
// export default index;


const ArithMeticComponent = (props) => {
    // meaning -> tên phải ý nghĩa
    const { title, onClick, isLastItem } = props;
    // if (isLastItem) {
    //     return <div
    //         className="canculator_bottom_right_item canculator_bottom_right_item_last"
    //         onClick={() => onClick && onClick()}
    //     >=</div>
    // }
    // return <div
    //     className="canculator_bottom_right_item"
    //     onClick={() => onClick && onClick()} // =-> nếu onClick tồn tại thì mới gọi hàm
    // >{title}</div>;
    return <div
        className={isLastItem ? 'canculator_bottom_right_item canculator_bottom_right_item_last' : 'canculator_bottom_right_item'}
        onClick={() => onClick && onClick()} // =-> nếu onClick tồn tại thì mới gọi hàm
    >{title}</div>;
}

// local component -> dia phuong 
// global compoennt -> toan cuc 

export default ArithMeticComponent;
