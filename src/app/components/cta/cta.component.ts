import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  heading1: string = 'Ready to elevate your IT experience?'
  @Input()
  content1: string =
    'Contact us today to discuss how Xperture Inc. can help your business thrive in the digital world.'
  @Input()
  action1: string = 'Get in touch'
  constructor() {}
}
