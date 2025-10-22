import { Component, OnInit } from '@angular/core';
import { MailMessage } from '../modeles/Mailmessage';
import { Personne } from '../modeles/Personne';

@Component({
  selector: 'app-spa',
  imports: [],
  templateUrl: './spa.html',
  styleUrl: './spa.css'
})
export class Spa implements OnInit{

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
