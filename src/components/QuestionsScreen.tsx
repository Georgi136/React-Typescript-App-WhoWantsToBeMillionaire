import { useSearchParams } from "react-router-dom";
import { EMPTY_STRING, NUMBER_OF_QUESTIONS, PRIZES_LIST_ARRAY, TYPE_OF_QUESTIONS } from "../constants.ts/defaults";
import {
  CATEGORY_SEARCH_PARAM,
  DIFFICULTY_SEARCH_PARAM,
} from "../constants.ts/options";
import {QuestionSection} from "./QuestionSection"
import { useCallback, useEffect, useState } from "react";
import { Button } from "primereact/button";
import "../styles/answers.style.css"

export const QuestionsScreen = () => {
  const [questions, setQuestions] = useState<any>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [question, setQuestion] = useState<any>(EMPTY_STRING);
  const [nextRound, setNextRound ] = useState<number>(0);
  
  const selectedCategory =
    searchParams.get(CATEGORY_SEARCH_PARAM) ?? EMPTY_STRING;
  const selectedDifficulty =
    searchParams.get(DIFFICULTY_SEARCH_PARAM) ?? EMPTY_STRING;

  const fetchQuestions = useCallback(async () => {
    const questionsURL = `https://opentdb.com/api.php?amount=${NUMBER_OF_QUESTIONS}&difficulty=${selectedDifficulty}&category=${selectedCategory}&types=${TYPE_OF_QUESTIONS}`;
    const response = await fetch(questionsURL);
    const jsonQuestions = await response.json();
    setQuestions(jsonQuestions.results);
    setQuestion(jsonQuestions[nextRound]?.question);
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions,setNextRound]);
  console.log(nextRound)
  console.log(question);
  //inGame(questions);
  return (
    <>
      <div className="play-container">
        <div className="dashboard">
        <div className="list-container">
          <div className="jokers">
            <div className="joker">50/50</div>
            <div className="joker">friend</div>
            <div className="joker">audition</div>
          </div>
          <ul className="prizes-list">
            {PRIZES_LIST_ARRAY.map((l) => (
               <li className={nextRound+1 === l.id ? "prize-item active" : "prize-item"}>
                <span className="prize-item-id">{l.id}:</span>
                <span className="prize-item-amount">{l.amount}</span>
               </li>
                ))}
         </ul>
        </div>
        <div className="timer-container">
          <div className="timer">30</div>
        </div>
        </div>
        <div className="main"><QuestionSection question={question}/></div>
      </div>
    </>
  );
};
