import React, { Component } from 'react';

class Option extends Component{
    constructor(props){
        super(props)
        this.state = {
            option1: false,
            option0: false,
            selected: null,
            buttonValue: null,
            index: null
        }
    }
    setOption = (e) => {
        this.setState(
        {
            buttonValue: e.target.value,
            selected: e.target.value === 'option0' ? 'yes' : 'no'
        }
        )
    }
    static getDerivedStateFromProps(props, state){
        if(props.step !== state.index){
            return {
                index: props.step,
                buttonValue: null,
                selected: null
            }
        }
    }
    render(){
        const { buttonValue } = this.state;
        return(
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form>
                       <div className="radio">
                           <label>
                               <input type="radio" value='option0' checked={buttonValue === 'option0' ? true : false}
                                onChange={(e) => {this.setOption(e); this.props.onOptionSelect('yes')}}/>
                                yes                        
                        </label>
                       </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="option1" checked={buttonValue === 'option1' ? true : false}
                                 onChange={(e) => {this.setOption(e); this.props.onOptionSelect('no')}} />
                                no
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Option;
