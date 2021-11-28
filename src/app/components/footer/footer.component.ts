import { Component, OnInit } from '@angular/core';

import { Constants } from '../../Constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Constants: any = Constants;

  constructor() { }

  ngOnInit(): void {
  }

}
