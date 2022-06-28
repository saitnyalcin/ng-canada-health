import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
  animations: [],
})
export class CardContainerComponent implements OnInit {
  public questionsData: any[] = [];

  public searchFilter: any = '';

  public showAlertMsg: boolean = true;

  constructor(private _questionService: QuestionsService) {}

  ngOnInit(): void {
    this._questionService
      .getQuestions()
      .subscribe((data) => (this.questionsData = data));
  }
}
