import "../styles/answers.style.css"


export const QuestionSection = (question:any) =>{


    return(
        <div className="question-section">
            <div className="question">question</div>
            <div className="answers">
                <div className="answer">answer</div>
                <div className="answer">answer</div>
                <div className="answer">answer</div>
                <div className="answer">answer</div>
            </div>
        </div>
    );
}
export default QuestionSection;

