//
//
// // GSAP Animations
// gsap.registerPlugin(ScrollTrigger);
//
// // Header Animations
// gsap.from('.logo', {
//     opacity: 0,
//     y: -50,
//     duration: 1,
//     ease: 'power3.out'
// });
//
// gsap.from('.nav-link', {
//     opacity: 0,
//     y: -20,
//     stagger: 0.1,
//     duration: 1,
//     ease: 'power3.out',
//     delay: 0.5
// });
//
// // Hero Section Animations
// gsap.from('.hero-image-container', {
//     opacity: 0,
//     scale: 0,
//     duration: 1.5,
//     ease: 'elastic.out(1, 0.5)',
//     scrollTrigger: {
//         trigger: '#hero',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.marquee-text', {
//     opacity: 0,
//     scale: 0,
//     duration: 1,
//     ease: 'power3.out',
//     delay: 0.3,
//     scrollTrigger: {
//         trigger: '#hero',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.hero-info h2', {
//     opacity: 0,
//     x: -200,
//     duration: 2,
//     ease: 'power3.out',
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: '#hero',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.hero-info p', {
//     opacity: 0,
//     y: 50,
//     duration: 1.5,
//     ease: 'power2.out',
//     delay: 0.7,
//     scrollTrigger: {
//         trigger: '#hero',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.tech-button', {
//     opacity: 0,
//     y: 30,
//     stagger: 0.2,
//     duration: 1,
//     ease: 'bounce.out',
//     delay: 0.9,
//     scrollTrigger: {
//         trigger: '#hero',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.tech-badge', {
//     opacity: 0,
//     scale: 0,
//     stagger: 0.2,
//     duration: 1,
//     ease: 'elastic.out(1, 0.3)',
//     delay: 1.1,
//     scrollTrigger: {
//         trigger: '#hero',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// // About Section Animations
// gsap.from('#about h2', {
//     opacity: 0,
//     y: -50,
//     duration: 1,
//     ease: 'power3.out',
//     scrollTrigger: {
//         trigger: '#about',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.about-panel', {
//     opacity: 0,
//     scale: 0.9,
//     duration: 1.5,
//     ease: 'power2.out',
//     scrollTrigger: {
//         trigger: '#about',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.about-content h3', {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     ease: 'power3.out',
//     delay: 0.3,
//     scrollTrigger: {
//         trigger: '#about',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.about-content p', {
//     opacity: 0,
//     y: 30,
//     stagger: 0.2,
//     duration: 1,
//     ease: 'power2.out',
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: '#about',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.tech-divider', {
//     width: 0,
//     duration: 1,
//     ease: 'power3.out',
//     delay: 0.7,
//     scrollTrigger: {
//         trigger: '#about',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.about-decor', {
//     opacity: 0,
//     scale: 0,
//     stagger: 0.2,
//     duration: 1,
//     ease: 'elastic.out(1, 0.5)',
//     delay: 0.9,
//     scrollTrigger: {
//         trigger: '#about',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// // Skills Section Animations
// gsap.from('#skills h2', {
//     opacity: 0,
//     y: -50,
//     duration: 1,
//     ease: 'power3.out',
//     scrollTrigger: {
//         trigger: '#skills',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.skill-card', {
//     opacity: 0,
//     y: 100,
//     stagger: 0.2,
//     duration: 1.5,
//     ease: 'back.out(1.7)',
//     scrollTrigger: {
//         trigger: '#skills',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// // Projects Section Animations
// gsap.from('#projects h2', {
//     opacity: 0,
//     y: -50,
//     duration: 1,
//     ease: 'power3.out',
//     scrollTrigger: {
//         trigger: '#projects',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.project-node', {
//     opacity: 0,
//     y: 150,
//     stagger: 0.3,
//     duration: 1.8,
//     ease: 'power3.out',
//     scrollTrigger: {
//         trigger: '#projects',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.node-frame', {
//     opacity: 0,
//     scale: 0,
//     stagger: 0.3,
//     duration: 1,
//     ease: 'elastic.out(1, 0.5)',
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: '#projects',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// // Blogs Section Animations
// gsap.from('#blogs h2', {
//     opacity: 0,
//     y: -50,
//     duration: 1,
//     ease: 'power3.out',
//     scrollTrigger: {
//         trigger: '#blogs',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.blogs-terminal', {
//     opacity: 0,
//     y: 150,
//     duration: 1.5,
//     ease: 'power2.out',
//     scrollTrigger: {
//         trigger: '#blogs',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.terminal-header', {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     ease: 'power3.out',
//     delay: 0.3,
//     scrollTrigger: {
//         trigger: '#blogs',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.blog-entry', {
//     opacity: 0,
//     x: -50,
//     stagger: 0.2,
//     duration: 1,
//     ease: 'power2.out',
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: '#blogs',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.terminal-footer', {
//     opacity: 0,
//     y: 20,
//     duration: 1,
//     ease: 'power3.out',
//     delay: 0.7,
//     scrollTrigger: {
//         trigger: '#blogs',
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// // Footer Animations
// gsap.from('footer', {
//     opacity: 0,
//     y: 50,
//     duration: 1.5,
//     ease: 'power2.out',
//     scrollTrigger: {
//         trigger: 'footer',
//         start: 'top 90%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('footer p', {
//     opacity: 0,
//     y: 20,
//     duration: 1,
//     ease: 'power3.out',
//     delay: 0.3,
//     scrollTrigger: {
//         trigger: 'footer',
//         start: 'top 90%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// gsap.from('.footer-link', {
//     opacity: 0,
//     y: 20,
//     stagger: 0.2,
//     duration: 1,
//     ease: 'power2.out',
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: 'footer',
//         start: 'top 90%',
//         toggleActions: 'play none none reverse'
//     }
// });
//
// // Background Parallax Effect
// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     document.body.style.backgroundPositionY = `${scrollY * 0.1}px`;
// });

// Store initialization timestamp
const INIT_TIMESTAMP = '2025-02-22 16:17:56';
const CURRENT_USER = 'zeroxv6';

// Wait for DOM content and images to be fully loaded
window.addEventListener('load', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Reset any transformed positions first
    gsap.set('.skill-card, .project-node', {
        clearProps: 'all'
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    // Create master timeline
    const masterTimeline = gsap.timeline();

    // Header Animations
    const headerTimeline = gsap.timeline();
    headerTimeline
        .from('.logo', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.nav-link', {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5');

    // Hero Section Animations
    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#hero',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    heroTimeline
        .from('.hero-image-container', {
            opacity: 0,
            scale: 0,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)'
        })
        .from('.hero-info h2', {
            opacity: 0,
            x: -200,
            duration: 2,
            ease: 'power3.out'
        }, '-=1')
        .from('.hero-info p', {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: 'power2.out'
        }, '-=1.5')
        .from('.tech-button', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: 'bounce.out'
        }, '-=1')
        .from('.tech-badge', {
            opacity: 0,
            scale: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'elastic.out(1, 0.3)'
        }, '-=0.5');

    // About Section Animations
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    aboutTimeline
        .from('#about h2', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.about-panel', {
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.about-content h3', {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.out'
        }, '-=1')
        .from('.about-content p', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8')
        .from('.tech-divider', {
            width: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.about-decor', {
            opacity: 0,
            scale: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'elastic.out(1, 0.5)'
        }, '-=0.8');

    // Skills Section Animations
    const skillsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    skillsTimeline
        .from('#skills h2', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.skill-card', {
            opacity: 0,
            y: 100,
            stagger: {
                each: 0.2,
                from: "start",
                grid: "auto"
            },
            duration: 1,
            ease: 'back.out(1.7)',
            clearProps: "all"
        }, '-=0.5');

    // Projects Section Animations
    const projectsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    projectsTimeline
        .from('#projects h2', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.project-node', {
            opacity: 0,
            y: 100,
            stagger: {
                each: 0.2,
                from: "start",
                grid: "auto"
            },
            duration: 1,
            ease: 'power3.out',
            clearProps: "all"
        }, '-=0.5')
        .from('.node-frame', {
            opacity: 0,
            scale: 0,
            stagger: {
                each: 0.2,
                from: "start",
                grid: "auto"
            },
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
            clearProps: "all"
        }, '-=0.5');

    // Blogs Section Animations
    const blogsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#blogs',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    blogsTimeline
        .from('#blogs h2', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.blogs-terminal', {
            opacity: 0,
            y: 150,
            duration: 1.5,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.terminal-header', {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.out'
        }, '-=1')
        .from('.blog-entry', {
            opacity: 0,
            x: -50,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8')
        .from('.terminal-footer', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5');

    // Footer Animations
    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });

    footerTimeline
        .from('footer', {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: 'power2.out'
        })
        .from('footer p', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out'
        }, '-=1')
        .from('.footer-link', {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8');

    // Background Parallax Effect with performance optimization
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                document.body.style.backgroundPositionY = `${scrollY * 0.1}px`;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Resize handler with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
});

// Performance monitoring
const performanceMonitor = {
    startTime: performance.now(),
    logPerformance: function() {
        const endTime = performance.now();
        console.log(`Page initialization took ${endTime - this.startTime}ms`);
        console.log(`Initialized at: ${INIT_TIMESTAMP} by user: ${CURRENT_USER}`);
    }
};

// Log performance after window load
window.addEventListener('load', () => {
    performanceMonitor.logPerformance();
});

// Error handling
window.addEventListener('error', (event) => {
    console.error('Animation error:', event.error);
});

