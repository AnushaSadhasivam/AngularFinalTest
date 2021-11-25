import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { TestService } from '../test.service';

import { Questions } from 'src/question';
import { Validators } from '@angular/forms';
import { Option } from 'src/option';

@Component({
  selector: 'app-take-atest',
  templateUrl: './take-atest.component.html',
  styleUrls: ['./take-atest.component.css']
})
export class TakeAtestComponent implements OnInit {

  constructor(private service: TestService) { }
  Questions: Questions[] = [];
  ngOnInit(): void {
    this.service.getQuestions().subscribe(res => this.Questions = res);
  }
  checkAnswer () {
    
    var correct = 0;
    this.Questions.forEach(q => {
      if (q.ans == q.selectedOption)
        correct++
  });
  alert('your score is '+ correct);
    console.log(correct);
  }
}
