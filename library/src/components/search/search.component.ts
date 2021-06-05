import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BooksearchService } from 'src/services/booksearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query = new FormControl('');
  items:any = [];
  list = true;
  constructor(public bookservice: BooksearchService) { }

  ngOnInit(): void {
  }
onClick(){
  this.bookservice.get(this.query.value).subscribe( (result:any) => {
    this.items = result.items.map((item:any) => {
      return {
        thumb:  item.volumeInfo.imageLinks.smallThumbnail,
        title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
      }
    })
  })
}
}
