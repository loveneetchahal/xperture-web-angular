import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.css'],
})
export class Pricing {
  @Input()
  plan3Price: string = '$299/month'
  @Input()
  plan3Action: string = 'Get Started'
  @Input()
  plan11: string = 'Basic plan'
  @Input()
  plan1Action: string = 'Get Started'
  @Input()
  plan31: string = 'Enterprise plan'
  @Input()
  plan3Feature41: string = 'Feature text goes here'
  @Input()
  plan1Feature2: string = 'Basic Security Features'
  @Input()
  plan2Feature11: string = 'Feature text goes here'
  @Input()
  plan3Feature51: string = 'Feature text goes here'
  @Input()
  plan2Feature41: string = 'Feature text goes here'
  @Input()
  plan2Feature2: string = 'Advanced Security Features'
  @Input()
  plan3Feature21: string = 'Feature text goes here'
  @Input()
  plan2Feature4: string = 'Feature text goes here'
  @Input()
  plan2Yearly: string = '$1999/year'
  @Input()
  plan1Action1: string = 'Get started'
  @Input()
  plan2Action: string = 'Get Started'
  @Input()
  plan3Feature1: string = '24/7 Priority Support'
  @Input()
  plan2Feature3: string = 'Weekly Updates'
  @Input()
  plan1Price1: string = '$200/yr'
  @Input()
  plan2: string = 'Standard Plan'
  @Input()
  plan2Feature21: string = 'Feature text goes here'
  @Input()
  plan2Action1: string = 'Get started'
  @Input()
  plan3Feature2: string = 'Custom Security Solutions'
  @Input()
  content1: string = 'Choose the perfect plan for you'
  @Input()
  plan2Feature1: string = '24/7 Support'
  @Input()
  heading1: string = 'Pricing plan'
  @Input()
  plan3Feature31: string = 'Feature text goes here'
  @Input()
  plan1: string = 'Basic Plan'
  @Input()
  plan21: string = 'Business plan'
  @Input()
  plan1Feature11: string = 'Feature text goes here'
  @Input()
  plan1Feature21: string = 'Feature text goes here'
  @Input()
  plan3Feature5: string = 'Feature text goes here'
  @Input()
  plan2Yearly1: string = 'or $29 monthly'
  @Input()
  plan2Price: string = '$199/month'
  @Input()
  plan3Yearly1: string = 'or $49 monthly'
  @Input()
  plan2Feature31: string = 'Feature text goes here'
  @Input()
  plan3Feature11: string = 'Feature text goes here'
  @Input()
  plan1Yearly1: string = 'or $20 monthly'
  @Input()
  plan2Price1: string = '$299/yr'
  @Input()
  plan3Yearly: string = '$2999/year'
  @Input()
  plan3Feature4: string = 'Feature text goes here'
  @Input()
  plan3Price1: string = '$499/yr'
  @Input()
  plan1Feature31: string = 'Feature text goes here'
  @Input()
  plan1Feature3: string = 'Monthly Updates'
  @Input()
  plan1Yearly: string = '$999/year'
  @Input()
  plan1Feature1: string = '24/7 Support'
  @Input()
  plan3Feature3: string = 'Daily Updates'
  @Input()
  content2: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  plan3Action1: string = 'Get started'
  @Input()
  plan1Price: string = '$99/month'
  @Input()
  plan3: string = 'Premium Plan'
  isMonthly: boolean = true
  constructor() {}
}
