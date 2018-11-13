import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[]
  iQuestion=0
  currentQuestion: Question
  answer: string
  found: boolean
  hasNext = true

  
  constructor(private quizService:QuizService) { }

  ngOnInit() {
      }
    
  

  newGame(){
    this.hasNext = true;
    
    this.quizService.buildNewQuiz(10).subscribe(
      value => {
        this.questions = value,
          console.log(this.questions)
          this.loadNextQuestion()
      },
      error => console.log(error)
    )
  }
  

  loadNextQuestion(){
    this.currentQuestion
  }

  timeSpent(){

  }

  answerGiven(answer:string){

  }

  showAnswer(){

  }
}
