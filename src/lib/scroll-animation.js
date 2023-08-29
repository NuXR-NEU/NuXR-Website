import gsap from "gsap";

export const scrollAnimation = (position , target, isMobile, onUpdate) => {

    const t1 = gsap.timeline();

    t1.to(position, 
        {
            x : 7.83,
            y : 7.86,
            z : -12.07,
            scrollTrigger : {
                trigger: '.about-section',
                start : "top bottom",
                end: "top top",
                scrub : 2,
                immediateRender : false
            },
            onUpdate
        }
    )
    .to(target,
        {
            x : -2.92,
            y : -2.31, 
            z : -0.42,
            scrollTrigger : {
                trigger: '.about-section',
                start : "top bottom",
                end: "top top",
                scrub : 2,
                immediateRender : false
            },
        }
    )
    .to('.jumbotron-section',
        {
           opacity : 0,
            scrollTrigger : {
                trigger: '.about-section',
                start : "top bottom",
                end: "top top",
                scrub : 2,
                immediateRender : false
            },
        }
    )
    .to('.about-section-content',
    {
       opacity : 1,
        scrollTrigger : {
            trigger: '.about-section',
            start : "top bottom",
            end: "top top",
            scrub : 2,
            immediateRender : false
        },
    }
    )
    .to(position, 
        {
            x : 0.0,
            y : 0.0,
            z : 25.0,
            scrollTrigger : {
                trigger: '.display-section',
                start : "top bottom",
                end: "top top",
                scrub : 2,
                immediateRender : false
            },
            onUpdate
        }
    )
    .to(target,
        {
            x : 0.0,
            y : 2,
            z : 0.0,
            scrollTrigger : {
                trigger: '.display-section',
                start : "top bottom",
                end: "top top",
                scrub : 2,
                immediateRender : false
            },
        }
    ) 
    .to('.about-section-content',
    {
       opacity : 0,
        scrollTrigger : {
            trigger: '.display-section',
            start : "top bottom",
            end: "top top",
            scrub : 2,
            immediateRender : false
        },
    }
)
.to('.display-section',
    {
       opacity : 1,
        scrollTrigger : {
            trigger: '.display-section',
            start : "top bottom",
            end: "top top",
            scrub : 2,
            immediateRender : false
        },
    }
)  
    

}