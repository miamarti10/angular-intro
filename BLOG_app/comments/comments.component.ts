import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  entradas = [{
    autor: 'Pepe',
    date: '01/01/2020',
    comment: 'Lorem ipsum dolor sit ametNon pariatur iste nulla illo tenetur laborum placeat?'
  },
  {
    autor: 'Valerie',
    date: '03/06/2020',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eius deserunt. Non pariatur iste nulla illo tenetur laborum placeat? Quas non ab ut doloremque distinctio. Minus modi at id nulla'
  }, {
    autor: 'Jazellee',
    date: '1/04/2020',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eius deserunt. Non pariatur iste nulla illo tenetur laborum placeat'
  }];


  constructor() { }

  ngOnInit(): void {
  }

}
