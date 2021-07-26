import React, { Component } from 'react'
import Select from 'react-select';
const options = [
    { value: '2', label: '2' },
    { value: '4', label: '4' },
    { value: '6', label: '6' },
];

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            listData: [
                { ProductID: 0, ProductName: 'Item 0', ProductPrice: 100 },
                { ProductID: 1, ProductName: 'Item 1', ProductPrice: 101 },
                { ProductID: 2, ProductName: 'Item 2', ProductPrice: 102 },
                { ProductID: 3, ProductName: 'Item 3', ProductPrice: 103 },
                { ProductID: 4, ProductName: 'Item 4', ProductPrice: 104 },
                { ProductID: 5, ProductName: 'Item 5', ProductPrice: 105 },
                { ProductID: 6, ProductName: 'Item 6', ProductPrice: 106 },
                { ProductID: 7, ProductName: 'Item 7', ProductPrice: 107 },
                { ProductID: 8, ProductName: 'Item 8', ProductPrice: 108 },
                { ProductID: 9, ProductName: 'Item 9', ProductPrice: 109 }
            ],
            selectedOption: null,
        }

    }
    renderTableData() {
        return this.state.listData.map((data, index) => {
            const { ProductID, ProductName, ProductPrice } = data //destructuring
            return (
                <tr key={ProductID}>
                    <td>{ProductID}</td>
                    <td>{ProductName}</td>
                    <td>{ProductPrice}</td>
                </tr>
            )
        })
    }
    renderTableHeader() {
        console.log("  thong ", Object.keys(this.state.listData[1]))
        let header = Object.keys(this.state.listData[0])
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }
    handleChange = selectedOption => {
        // console.log("chon ",selectedOption)
        this.setState({ selectedOption });
        // console.log(`Option selected:`, selectedOption);
    };

    render() { 
        //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        const { selectedOption } = this.state
        return (
            <div>
                <h1 id='title'>Product Table</h1>
                <table id='listdata'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <div style={{width:"5%" , margin:"auto" , marginTop:"20px" }}>
                <Select
                    // value={selectedOption}
                    defaultValue={options[0]}
                    onChange={this.handleChange}
                    options={options}
                />
                </div>
            </div>
        )
    }
}

export default Table