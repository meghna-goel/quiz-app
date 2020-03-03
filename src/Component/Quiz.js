import React, { Component } from 'react';
import {arrayQuiz} from './Constant';
import Question from './Question';
import Option from './Option';

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            option1: false,
            option2: false,
            option3: false,
            quiz: arrayQuiz,
            step: 0,
            answer:[],
            result: 0
        }
    }
    onOptionSelect = (answer) => {
        let answerKey = [...this.state.answer];
        answerKey.push({'key': this.state.step, 'answer': answer})
        this.setState({
            answer: answerKey
        })
    }
    handleNext = () => {
        const { answer, step } = this.state;
        let findAnswer = answer.filter(x => x.key === step)
        if(!findAnswer.length){
            alert("Please fill the answer")
        } else {
            this.setState((prevState) => ({
                step : prevState.step + 1
            }))
        }
    }
    handleSubmit = () => {
        const {answer, quiz, step} = this.state
        let finalResult = 0
        let findAnswer = answer.filter(x => x.key === step)
        if(!findAnswer.length){
            alert("Please fill the answer")
        } else {
        for (let i = 0; i< quiz.length; i++){
            if(quiz[i].answer === answer[i].answer){
                finalResult = finalResult + 1;
            }
        }
        alert('Score is ' + finalResult)
        }
    }
    render() {
        const { step, quiz } = this.state;
        return (
            <div>
                <Question quest={quiz[step]}/>
                <Option option={quiz[step]} onOptionSelect={this.onOptionSelect} step={step}/>
               {step < 4 && <button onClick={this.handleNext}>Next</button>}
                {step === 4 && <button onClick={this.handleSubmit}>Submit</button>}
            </div>
        )
    }
}

export default Quiz;