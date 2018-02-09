var tl = new TimelineMax;

tl.to("#scramble", 3, { scrambleText: { text: "• October 1st, 1958 On this date the National Aeronautics and Space Administration (NASA) began operation.", chars: "01", revealDelay: 0.8, tweenLength: false, ease: Linear.easeNone } })

.to("#scrambleText2", 3, { scrambleText: { text: "• Today, NASA continues to explore space and terrestrial objects using satellites, rovers, and the ISS.", chars: "01", revealDelay: 1.6, tweenLength: false, ease: Linear.easeNone } })