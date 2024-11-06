import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['steps.component.css'],
})
export class Steps {
  @Input()
  step1Description: string =
    'Schedule a consultation with our experts to discuss your IT needs and goals.'
  @Input()
  step3Description: string =
    'We will efficiently implement the plan ensuring smooth integration and minimal disruption.'
  @Input()
  step2Title: string = 'Planning'
  @Input()
  step2Description: string =
    'Our team will create a customized plan tailored to your specific requirements and budget.'
  @Input()
  step1Title: string = 'Consultation'
  @Input()
  step3Title: string = 'Implementation'
  @Input()
  step4Description: string =
    'Receive ongoing support and maintenance to keep your IT systems running smoothly.'
  @Input()
  step4Title: string = 'Support'
  constructor() {}
}
