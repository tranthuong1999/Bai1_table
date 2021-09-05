import React, { Component } from 'react'


class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            student: null,
            name: '',
            country: '',
        }
    }

    componentDidMount() {
        const studentLocal = localStorage.getItem('Student');
        console.log('studentLocal:', studentLocal);
        const student = JSON.parse(studentLocal);
        console.log('student:', student);
        this.setState({ student });
    }

    // handleJSON() {
    //     const student = {
    //         name: 'ThuongTran',
    //         country: 'ThaiBinhCity',
    //     };
    //     //add key
    //     // student.age = 29;
    //     student['age'] = 18;
    //     //remove key
    //     // delete student.country;
    //     // delete student['country'];
    //     // console.log('student after:', student);
    //     // this.setState({ student: student })
    //     this.setState({ student })
    // }

    handleSave() {
        const { name, country } = this.state;
        console.log('Handle save name:', name);
        console.log('Handle save country:', country);
        const student = {
            name,
            country,
        }
        console.log('Handle save student:', (student));
        console.log('Handle save student:', JSON.stringify(student));
        localStorage.setItem('Student', JSON.stringify(student))
    }

    render() {
        const { student, name, country } = this.state;
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <div style={{ width: 500, height: 500, borderWidth: 1, borderColor: '#cacaca', backgroundColor: '#cacaca' }}>
                <div>Reuse Component, LocalStorage, JSON</div>
                {/* <h4>Student Name: {student && student.name}</h4> */}
                {/* nen dung */}
                <div>
                    <input
                        value={name}
                        placeholder={'Name'}
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        value={country}
                        placeholder={'Country'}
                        onChange={e => this.setState({ country: e.target.value })}
                    />
                </div>
                <div>
                    <button onClick={() => this.handleSave()}>Save</button>
                </div>
                <h4>Student Name: {student?.name}</h4>
            </div>
        </div>
    }

}
export default index;