import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookService: BookService;

  constructor(bookService: BookService) { 
    this.bookService = bookService;
  }

  ngOnInit(): void {

    this.livros = this.bookService.getBook().subscribe({
      next: data => this.livros = data.books,
      error: err => console.log('Erro: ', err)
    })

  }

}
