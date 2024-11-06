import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature1ImgAlt: string = 'Secure Data Encryption'
  @Input()
  feature3Description: string = '24/7 Technical Support'
  @Input()
  feature3Title: string = 'Dedicated Support Team'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQxOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQyMHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string = 'Customized IT Solutions'
  @Input()
  feature1Title: string = 'Data Security'
  @Input()
  feature3ImgAlt: string = 'Technical Support Team'
  @Input()
  feature1Description: string =
    'We prioritize the security of your data with advanced encryption methods.'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1487088678257-3a541e6e3922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQyMXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgAlt: string = 'Custom IT Solutions'
  @Input()
  feature2Title: string = 'Tailored Solutions'
  activeTab: number = 0
  constructor() {}
}
