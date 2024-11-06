import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  author2Position: string = 'CTO, Digital Innovations Corp.'
  @Input()
  author1Position: string = 'CEO, Tech Solutions Ltd.'
  @Input()
  author3Alt: string = 'Image of Michael Johnson'
  @Input()
  author1Name: string = 'John Doe'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1519815652305-daa7825b52aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQxOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Name: string = 'Michael Johnson'
  @Input()
  review2: string =
    'We engaged Xperture Inc. for a complex IT project, and they delivered exceptional results within the agreed timeline. Their expertise and dedication are truly commendable.'
  @Input()
  author2Name: string = 'Jane Smith'
  @Input()
  author4Position: string = 'COO, Future Tech Solutions'
  @Input()
  author4Name: string = 'Sarah Williams'
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1467007849282-42dad96c2312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQxOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Alt: string = 'Image of John Doe'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1615712278090-a935af124081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQxOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1496360711189-5edeb09fe715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQxOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Alt: string = 'Image of Jane Smith'
  @Input()
  author4Alt: string = 'Image of Sarah Williams'
  @Input()
  content1: string =
    'Xperture Inc. provided top-notch IT services that exceeded our expectations. Their team is highly skilled and professional, and we are extremely satisfied with the results.'
  @Input()
  author3Position: string = 'CIO, Global Enterprises LLC'
  @Input()
  review1: string =
    'Xperture Inc. provided top-notch IT services that exceeded our expectations. Their team is highly skilled and professional, and we are extremely satisfied with the results.'
  @Input()
  heading1: string = 'Testimonials'
  @Input()
  review3: string =
    'Working with Xperture Inc. was a game-changer for our company. Their innovative solutions streamlined our processes and significantly improved our efficiency.'
  @Input()
  review4: string =
    'Xperture Inc. stands out for their exceptional customer service and technical expertise. They are reliable partners who always go the extra mile to ensure client satisfaction.'
  constructor() {}
}
