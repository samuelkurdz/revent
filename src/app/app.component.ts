import {AfterViewInit, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DatePipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
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
  ];

  options:  IntersectionObserverInit = {
    root: document,
    rootMargin: "0px",
    threshold: 0.8,
  };

  previousY = 0;
  previousRatio = 0;


  observer = new IntersectionObserver((e) => {
    for (let i = 0; i < e.length; i++) {
      const entry = e[i];
      const target = entry.target;

      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;

      if (currentY < this.previousY) {
        if (currentRatio > this.previousRatio && isIntersecting) {
          // console.log("Scrolling down enter", target.id);

        } else {
          // console.log("Scrolling down leave", target.id);
        }
      } else if (currentY > this.previousY && !isIntersecting) {
        if (currentRatio < this.previousRatio) {
          // console.log("Scrolling up leave", target.id);

          if (entry.target.id === "step-1") {
            // requestAnimationFrame(() => {
              entry.target.classList.add("text-[#BDBDBD]");
              entry.target.children[0].classList.remove("after:bg-primary");
              entry.target.children[0].classList.add("after:bg-[#F2F2F2]");
            // })
          }

          if (entry.target.id === "step-2") {
            // requestAnimationFrame(() => {
              entry.target.classList.remove("step-item-2");
              entry.target.classList.add("text-[#BDBDBD]");
              entry.target.children[0].classList.remove("after:bg-primary");
              entry.target.children[0].classList.add("after:bg-[#F2F2F2]");
            // });
          }

          if (entry.target.id === "step-3") {
            // requestAnimationFrame(() => {
              entry.target.classList.remove("step-item-3");
              entry.target.classList.add("text-[#BDBDBD]");
              entry.target.children[0].classList.remove("after:bg-primary");
              entry.target.children[0].classList.add("after:bg-[#F2F2F2]");
            // })
          }


        } else {
          // console.log("Scrolling up enter", target.id);
        }
      }

      this.previousY = currentY;
      this.previousRatio = currentRatio;

      if (target.id === "step-1") {
        if (entry.isIntersecting) {
          // requestAnimationFrame(() => {
            entry.target.classList.remove("text-[#BDBDBD]");
            entry.target.children[0].classList.add("after:bg-primary");
            entry.target.children[0].classList.remove("after:bg-[#F2F2F2]");
          // });
        }
      }

      if (target.id === "step-2") {
        if (entry.isIntersecting) {
          // requestAnimationFrame(() => {
            entry.target.classList.add("step-item-2");
            entry.target.classList.remove("text-[#BDBDBD]");
            entry.target.children[0].classList.add("after:bg-primary");
            entry.target.children[0].classList.remove("after:bg-[#F2F2F2]");
          // });
        }
      }

      if (target.id === "step-3") {
        if (entry.isIntersecting) {
          // requestAnimationFrame(() => {
            entry.target.classList.add("step-item-3");
            entry.target.classList.remove("text-[#BDBDBD]");
            entry.target.children[0].classList.add("after:bg-primary");
            entry.target.children[0].classList.remove("after:bg-[#F2F2F2]");
          // })
        }
      }
    }
  }, this.options);

  ngAfterViewInit() {
    this.observer.observe(document.querySelector("#step-1")!);
    this.observer.observe(document.querySelector("#step-2")!);
    this.observer.observe(document.querySelector("#step-3")!);
  }

}
