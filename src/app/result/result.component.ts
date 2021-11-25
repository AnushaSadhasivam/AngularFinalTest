import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/question';
import { FormGroup } from '@angular/forms';
import { TestService } from '../test.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  Questions: Questions[] = [];
  SelectedOptions:[];
  
  submitted: boolean = false;
  @Input() ques: Questions;
  registerForm:FormGroup;

  constructor(private service:TestService) { }

  ngOnInit(): void {
    this.service.getQuestions().subscribe(res => this.Questions = res);
  }

  
}
