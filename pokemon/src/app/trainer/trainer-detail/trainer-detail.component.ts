import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  
  trainerId!: string;
  @Input() trainerDetail!: Trainer;

  constructor(private route: ActivatedRoute,
              private trainerService: TrainerService) {}

  getTrainerId(){
    this.trainerService.getTrainer(this.trainerId).subscribe(apiData => {this.trainerDetail = apiData; })
  }

  ngOnInit() {
    if (this.trainerDetail === undefined){
      this.trainerId =  this.route.snapshot.paramMap.get('id')!
      if (this.trainerId){
        this.getTrainerId();
      }
    }
  }

}
