import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  content2: string = 'We typically respond to emails within one business day.'
  @Input()
  email1: string = 'info@xperture.com'
  @Input()
  address1: string = '123 Main Street, City, Country'
  @Input()
  content3: string = 'Feel free to give us a call during our office hours.'
  @Input()
  content1: string =
    'Get in touch with us for any inquiries or project collaborations.'
  @Input()
  content4: string =
    'Visit our office during working hours for a face-to-face discussion.'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content5: string = 'Follow us on social media for updates and news.'
  @Input()
  phone1: string = '+1-123-456-7890'
  constructor() {}
}
