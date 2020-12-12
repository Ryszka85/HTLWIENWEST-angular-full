import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cropper-details-bar',
  templateUrl: './cropper-details-bar.component.html',
  styleUrls: ['./cropper-details-bar.component.scss']
})
export class CropperDetailsBarComponent implements OnInit {
  showFiller: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
