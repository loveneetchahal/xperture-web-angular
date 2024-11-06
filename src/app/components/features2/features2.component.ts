import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features2',
  templateUrl: 'features2.component.html',
  styleUrls: ['features2.component.css'],
})
export class Features2 {
  @Input()
  feature3Description: string =
    'Dedicated support team available round the clock for any assistance'
  @Input()
  feature1ImgAlt: string = 'Customized Solutions Image Alt Text'
  @Input()
  feature1Description: string =
    'Tailored IT solutions to meet your specific business needs'
  @Input()
  feature3ImgAlt: string = '24/7 Support Image Alt Text'
  @Input()
  feature2Title: string = 'Cutting-Edge Technology'
  @Input()
  feature1Title: string = 'Customized Solutions'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQxOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQyMHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string =
    'Utilizing the latest technologies to drive innovation and efficiency'
  @Input()
  feature3Title: string = '24/7 Support'
  @Input()
  feature2ImgAlt: string = 'Cutting-Edge Technology Image Alt Text'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDg4OTQyMXw&ixlib=rb-4.0.3&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
