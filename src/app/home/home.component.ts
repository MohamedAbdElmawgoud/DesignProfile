import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'phone': new FormControl('', [Validators.required]),
    "mail": new FormControl('', [Validators.required , Validators.email]),
    "message": new FormControl('', [Validators.required]),


  });
  constructor() { }

  ngOnInit(): void {
  }

}
