import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export class TextReveal {
  constructor(el) {
    this.DOM = {
      outer: el,
      inner: Array.isArray(el)
        ? el.map((outer) => outer.querySelector(".hehe__inner"))
        : el.querySelector(".hehe__inner"),
    };
  }
  in() {
    if (this.outTimeline && this.outTimeline.isActive()) {
      this.outTimeline.kill();
    }

    this.inTimeline = gsap
      .timeline({
        defaults: { duration: 1.2, ease: "expo" },
        scrollTrigger: { trigger: this.DOM.inner },
      })
      .set(this.DOM.inner, {
        y: "150%",
        rotate: 15,
        opacity: 0,
        backgroundPositionX: "100%",
      })
      .to(this.DOM.inner, {
        y: "0%",
        rotate: 0,
        opacity: 1,
        stagger: 0.03,
        delay: 0.2,
        backgroundPositionX: "0%",
      });
    return this.inTimeline;
  }
  out() {
    if (this.inTimeline && this.inTimeline.isActive()) {
      this.inTimeline.kill();
    }

    this.outTimeline = gsap
      .timeline({ defaults: { duration: 0.7, ease: "power2" } })
      .to(this.DOM.inner, {
        y: "-150%",
        rotate: -5,
        stagger: 0.03,
      });
    return this.outTimeline;
  }
}
