import React from 'react'
import BubbleMenu from './components/BubbleMenu.jsx'
import Hyperspeed from './components/Hyperspeed.jsx';
import ProjectCards from './components/ProjectsCards.jsx'
import SkillsSection from './components/SkillsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';



const items = [
    {
        label: 'Home',
        href: '#home',
        ariaLabel: 'Navigate to home section',
        rotation: -8,
        hoverStyles: { bgColor: '#03B3C3', textColor: '#ffffff' }
    },
    {
        label: 'Projects',
        href: '#projects',
        ariaLabel: 'Navigate to projects section',
        rotation: 8,
        hoverStyles: { bgColor: '#03B3C3', textColor: '#ffffff' }
    },
    {
        label: 'Skills',
        href: '#skills',
        ariaLabel: 'Navigate to skills section',
        rotation: 8,
        hoverStyles: { bgColor: '#03B3C3', textColor: '#ffffff' }
    },
    {
        label: 'Experience',
        href: '#experience',
        ariaLabel: 'Navigate to experience section',
        rotation: 8,
        hoverStyles: { bgColor: '#03B3C3', textColor: '#ffffff' }
    },
    {
        label: 'Contact',
        href: '#contact',
        ariaLabel: 'Navigate to contact section',
        rotation: -8,
        hoverStyles: { bgColor: '#03B3C3', textColor: '#ffffff' }
    },
];



const App = () => {
    return (
        <div className='min-h-screen bg-black overflow-hidden scroll-smooth'>
            <header>
                <BubbleMenu
                    logo={<span style={{ fontWeight: 900, fontSize: '1.2rem' }}>ABID KHAN</span>}
                    items={items}
                    menuAriaLabel="Main navigation menu"
                    menuBg="#ffffff"
                    menuContentColor="#111111"
                    useFixedPosition={true}
                    animationEase="back.out(1.5)"
                    animationDuration={0.5}
                    staggerDelay={0.12}
                />
            </header>

            <main>
                <section className="relative z-10 min-h-screen flex items-center justify-center text-center" id="home" aria-label="Hero section">
                    <div className="inline-block">
                        <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white">
                            Abid Khan<br />Frontend Developer
                        </h1>
                        <p className="text-lg md:text-2xl animate-bounce text-white">
                            Clean code | creative design <br />
                            Turning ideas into smooth web apps
                        </p>
                    </div>
                </section>

                <div className="relative" aria-hidden="true">
                    <Hyperspeed
                        effectOptions={{
                            onSpeedUp: () => { },
                            onSlowDown: () => { },
                            distortion: 'turbulentDistortion',
                            length: 400,
                            roadWidth: 10,
                            islandWidth: 2,
                            lanesPerRoad: 4,
                            fov: 90,
                            fovSpeedUp: 150,
                            speedUp: 2,
                            carLightsFade: 0.4,
                            totalSideLightSticks: 20,
                            lightPairsPerRoadWay: 40,
                            shoulderLinesWidthPercentage: 0.05,
                            brokenLinesWidthPercentage: 0.1,
                            brokenLinesLengthPercentage: 0.5,
                            lightStickWidth: [0.12, 0.5],
                            lightStickHeight: [1.3, 1.7],
                            movingAwaySpeed: [60, 80],
                            movingCloserSpeed: [-120, -160],
                            carLightsLength: [400 * 0.03, 400 * 0.2],
                            carLightsRadius: [0.05, 0.14],
                            carWidthPercentage: [0.3, 0.5],
                            carShiftX: [-0.8, 0.8],
                            carFloorSeparation: [0, 5],
                            colors: {
                                roadColor: 0x080808,
                                islandColor: 0x0a0a0a,
                                background: 0x000000,
                                shoulderLines: 0xFFFFFF,
                                brokenLines: 0xFFFFFF,
                                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                                sticks: 0x03B3C3,
                            }
                        }}
                    />
                </div>

                <section className="relative z-10 min-h-screen text-white" id="projects" aria-labelledby="projects-heading">
                    <ProjectCards />
                </section>

                <section className="relative z-10 min-h-screen text-white" id="skills" aria-labelledby="skills-heading">
                    <SkillsSection />
                </section>

                <section className="relative z-10 text-white" id="experience" aria-labelledby="experience-heading">
                    <ExperienceSection />
                </section>

                <section className="relative z-10 text-white" id="contact" aria-labelledby="contact-heading">
                    <ContactSection />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default App