import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  column2Title: string = 'Services'
  @Input()
  link7: string = 'IT Consulting'
  @Input()
  link5: string = 'Web Development'
  @Input()
  link8: string = 'Cybersecurity'
  @Input()
  action1: string = 'Subscribe to Newsletter'
  @Input()
  content3: string = '© 2023 Xperture Inc. All rights reserved.'
  @Input()
  link4: string = 'Blog'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  cookiesLink: string = 'Cookie Policy'
  @Input()
  content2: string = 'Stay up to date with our latest news and offerings.'
  @Input()
  link9: string = 'Cloud Services'
  @Input()
  link6: string = 'Mobile App Development'
  @Input()
  logoAlt: string = 'Xperture Inc. Logo'
  @Input()
  link1: string = 'About Us'
  @Input()
  privacyLink: string = 'Privacy Policy'
  @Input()
  link10: string = 'Data Analytics'
  @Input()
  column1Title: string = 'Company'
  @Input()
  termsLink: string = 'Terms of Service'
  @Input()
  link3: string = 'FAQs'
  @Input()
  link2: string = 'Contact Us'
  @Input()
  socialLinkTitleCategory: string = 'Follow Us'
  constructor() {}
}
