import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default class PalindromStrings extends React.PureComponent {
    state = {
        inputString: '',
        result: [],
        printStrings: false
    }
    inputString = (e) => {
        this.setState({ inputString: e.target.value })
    }
    //given string is palindrom or not
    palindrom = (str) => {
        let re = /[\W_]/g;
        let lowerRegStr = str.toLowerCase().replace(re, '');
        let reverseStr = lowerRegStr.split('').reverse().join('');
        //console.log(lowerRegStr, reverseStr);
        return reverseStr === lowerRegStr;


    }
    checkallpalindrom = () => {
        var result = this.palindromsubString(this.state.inputString);
        result.map((item) => { console.log(item.join(' ')) })
        this.setState({ result: result, printStrings: true })
    }
//find all partion
    palindromsubString = (s) => {

        const P = [];
        const palindromString = (str, array) => {

            if (str.length === 0 && array.length !== 0) { P.push(array); return; }

            for (let i = 0; i < str.length; i++) {

                const subs = str.substring(0, i + 1);

                if (this.palindrom(subs)) {
                    palindromString(str.substring(i + 1), [...array, subs]);
                }

            }

        };
        //  console.log(cnt++);
        palindromString(s, []);
        console.log(P);
        return P;

    }
    // printstring = (result) => {
    //     var returnsrting = result.map((item) => {
    //         <div>
    //             <ul>
    //                 <li>
    //                 </li>
    //             </ul>
    //         </div>
    //     })
    //     return returnsrting;
    // }
    render() {
        let result = '';
        return (
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div class="form-group">
                            <label>Enter input string</label>
                            <input value={this.state.inputString} type='text' className="form-control" onChange={this.inputString}></input>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div class="form-group">
                            <label>&nbsp;</label>
                            <button className='btn btn-primary form-control' onClick={this.checkallpalindrom}>Submit</button>
                        </div>
                    </div>
                </div>
                {
                    this.state.printStrings && this.state.result &&
                    <div> <h6>Partition palindrom strings:</h6>
                        {this.state.result.map((item) => {
                            console.log(item.join(' '))
                            return <div>
                                {item.join(' ')}</div>
                        })}
                    </div>
                }
            </div >
        )
    }
}
