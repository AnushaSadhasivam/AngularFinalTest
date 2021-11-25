import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { TestService } from '../test.service';
import { Questions } from 'src/question';
import { FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-angularonline',
  templateUrl: './angularonline.component.html',
  styleUrls: ['./angularonline.component.css']
})
export class AngularonlineComponent implements OnInit {


  constructor(private service: TestService,private formBuilder: FormBuilder) { }
  Questions: Questions[] = [];
  iscorrect: boolean = false;
  isoncorrect:boolean=false;
  submitted: boolean = false;
  isempty:boolean=true;
  alert:string="Please do a selection";
  @Input() ques: Questions;
  @Output()answer = new EventEmitter<string>();
  registerForm:FormGroup;
  ngOnInit(): void {
    this.service.getQuestions().subscribe(res => this.Questions = res);
    
    
  }
  
  onSubmit(){
    this.submitted=true;
    
    
      if(this.submitted)
      {
        this.checkAnswer();
      //alert('your request has been submitted for approval');
    }
  }

  
  checkAnswer () {
    
    var correct = 0;
    
    this.Questions.forEach(q => {
      if(q.selectedOption=="")
      {
       this.isempty=false;
       this.alert="Please do a selection";
        return;
      }
      else{
        this.isempty=true;
      }

      if (q.ans == q.selectedOption)
        correct++
        
  });
  
  alert('your score is '+ correct);
    console.log(correct);
  
  }
  
}

