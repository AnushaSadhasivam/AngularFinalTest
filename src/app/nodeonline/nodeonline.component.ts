import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Questions } from 'src/question';

@Component({
  selector: 'app-nodeonline',
  templateUrl: './nodeonline.component.html',
  styleUrls: ['./nodeonline.component.css']
})
export class NodeonlineComponent implements OnInit {

  constructor(private service: TestService) { }
  Questions: Questions[] = [];
  ngOnInit(): void {
    this.service.getQuestionsNode().subscribe(res => this.Questions = res);
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
