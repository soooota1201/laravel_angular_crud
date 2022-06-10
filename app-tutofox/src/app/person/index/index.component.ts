import { Component, OnInit } from '@angular/core';
import { isTemplateSpan } from 'typescript';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  persons: Person[] = [];

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getAll().subscribe((data: Person[]) => {
      this.persons = data;
    })
  }

  deletePerson(id) {
    this.personService.delete(id).subscribe(res => {
      this.persons = this.persons.filter(item => item.id !== id)
    })
  }
}
