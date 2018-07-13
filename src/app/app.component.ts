import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {MadkingService} from "./service/madking.service";
import {Madking} from "./model/madking.model";
import {Response} from "./model/response.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private madKingService: MadkingService){};

  madKings: Madking[];
  title = 'MadKing Application';
  statusCode = 200;
  message = "Success";

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.madKingService.getAll()
      .subscribe((data: Response) => {
        console.log("data:" + JSON.stringify(data.data))
        this.madKings = data.data;
        this.statusCode = data.statusCode;
        this.message = data.message;
      });
  }

  save(transactional: boolean): void {
    this.madKingService.save(this.madKings, transactional)
      .subscribe((data: Response) => {
        //this.madKings = data.data;
        this.statusCode = data.statusCode;
        this.message = data.message;
        this.getAll();
      });
  }
}
