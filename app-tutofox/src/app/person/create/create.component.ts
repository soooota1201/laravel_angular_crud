import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup

  constructor(
    public personService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    })
  }

  get f() {
    return this.form.controls
  }

  submit() {
    this.personService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl('person/index')
    })
  }

}
