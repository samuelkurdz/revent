import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DatePipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  offer2: string[] = ["Money Lending", "Micro-Finance", "Advisory"];
  currentDate = new Date();

  news = [
    {
      title: "A digital prescription for the pharma industry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......",
    },
    {
      title: "A digital prescription for the pharma industry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......",
    },
    {
      title: "A digital prescription for the pharma industry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......",
    },
  ];

  bentoContents1=  [
    {
      title: "Quick & Instant",
      description: "We provide you with a faster approach to applying for a loan. As mentioned earlier, you will get your loan within 24 hours.",
    },
    {
      title: "Technology driven",
      description: "We have enhanced the loan application process by utilizing technology to bring you convenience and speed ",
    },
  ]
  bentoContents2=  [
    {
      title: "Competitive interest rates",
      description: "Our interest rates are hard to beat. With us you get more for less.",
    },
    {
      title: "Convenient & flexible",
      description: "With us you get access to the funds you need through our hassle-free and efficient processes",
    },
  ]
}
