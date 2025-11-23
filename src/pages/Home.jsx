import AnimatedContent from '../components/animations/AnimatedContent';
import TextPressure from "../components/text/TextPressure";
import FaultyTerminal from '../components/background/FaultyTerminal';
import TextType from '../components/text/TextType';
import LightRays from '../components/others/LightRays';
import BlurText from '../components/text/BlurText';
import SplitText from '../components/text/SplitText';
import GlassSurface from '../components/others/GlassSurface';
import TechCard from '../components/cards/TechCard';
import ActivityTerminal from '../components/others/ActivityTerminal';
import ProfileCard from '../components/cards/ProfileCard';
import SocialCard from '../components/cards/SocialCard';
import {
    SiReact,
    SiNodedotjs,
    SiGithub,
    SiTelegram,
    SiInstagram,
    SiX,
    SiSpotify
} from '@icons-pack/react-simple-icons';

export default function Home() {
    return (
        <div className='h-screen scroll-smooth snap-y snap-mandatory overflow-x-hidden bg-black' id="snap-main-container" style={{ overflowY: 'scroll' }}>
            <section className="w-screen h-screen bg-black relative snap-center overflow-hidden">
                <div className='fixed inset-0 z-0'>
                    <FaultyTerminal
                        scale={2}
                        gridMul={[2, 1]}
                        digitSize={1.2}
                        timeScale={0.2}
                        pause={false}
                        scanlineIntensity={1}
                        glitchAmount={1}
                        flickerAmount={0.5}
                        noiseAmp={1}
                        chromaticAberration={0}
                        dither={0}
                        curvature={0.3}
                        tint="#ffffff"
                        mouseReact={false}
                        pageLoadAnimation={true}
                        brightness={0.3}
                    />
                </div>

                <div className="relative z-10 w-full h-full">
                    <AnimatedContent
                        distance={350}
                        reverse={true}
                        initialOpacity={0}
                        direction="vertical"
                        duration={1.2}
                        ease="power3.out"
                        animateOpacity
                        scale={1.5}
                        threshold={0.2}
                    >
                        <div className="min-h-screen flex flex-col container mx-auto px-4 py-8 flex-1 items-center justify-center text-center">
                            <div className="my-4 sm:my-8 w-full max-w-4xl mx-auto">
                                <AnimatedContent
                                    distance={150}
                                    initialOpacity={0}
                                    direction="vertical"
                                    duration={1.4}
                                    ease="power3.out"
                                    animateOpacity
                                    scale={1.2}
                                    threshold={0.2}
                                >
                                    <TextPressure
                                        text="DANIEL FREAK"
                                        flex={true}
                                        alpha={false}
                                        stroke={false}
                                        width={true}
                                        weight={true}
                                        italic={true}
                                        textColor="rgba(255, 255, 255, 0.7)"
                                        strokeColor="#ff0000"
                                        className="select-none max-w-full text-balance"
                                        style={{
                                            fontSize: 'max(3rem, min(10rem, 10vw))',
                                        }}
                                    />

                                    <TextType
                                        text={["WEB DEVELOPER", "BACKEND DEVELOPER", "AN AWESOME PERSON (✿◦’ᴗ˘◦)♡"]}
                                        typingSpeed={80}
                                        deletingSpeed={25}
                                        className="mt-4 sm:mt-6 text-white/70 select-none max-w-full"
                                        style={{
                                            fontSize: 'max(1.125rem, min(1.5rem, 3vw))'
                                        }}
                                    />
                                </AnimatedContent>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>
            <section className="w-screen h-screen bg-black relative snap-center">
                <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
                    <AnimatedContent
                        distance={0}
                        scale={1.1}
                        initialOpacity={0}
                        duration={2}
                        ease="power2.out"
                        animateOpacity
                        threshold={0.1}
                        className="w-full h-full"
                    >
                        <div className="w-full h-full">
                            <LightRays
                                raysOrigin="top-center"
                                raysColor="#ffffff"
                                raysSpeed={1.5}
                                lightSpread={0.8}
                                rayLength={1.2}
                                followMouse={true}
                                mouseInfluence={0.1}
                                noiseAmount={0.1}
                                distortion={0.05}
                                className="w-full h-full"
                            />
                        </div>
                    </AnimatedContent>
                </div>

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <AnimatedContent
                        distance={100}
                        initialOpacity={0}
                        direction="vertical"
                        reverse={true}
                        duration={1}
                        ease="power3.out"
                        animateOpacity
                        scale={1.1}
                        threshold={0.5}
                        delay={0.5}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <BlurText
                            text="ABOUT ME"
                            intensity={1.2}
                            color="#ffffff"
                            className="text-5xl font-bold tracking-wider font-sync text-center text-white/80 max-sm:text-2xl"
                            animateBy="letters"
                            direction="top"
                            delay={100}
                        />
                        <SplitText
                            text="It is ok to share personal information on the internet, right?"
                            className="text-xl text-center text-white/50 max-sm:text-xs max-sm:ml-3 max-sm:mr-3 max-sm:text-wrap "
                            delay={150}
                            duration={0.4}
                            ease="power3.out"
                            splitType="words"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            textAlign="center"
                            threshold={0}
                        />
                        <AnimatedContent
                            distance={50}
                            initialOpacity={0}
                            direction="vertical"
                            duration={0.8}
                            ease="power3.out"
                            animateOpacity
                            scale={1.1}
                            threshold={0.5}
                            delay={1.5}
                        >
                            <GlassSurface flat={true} className="p-0 bg-transparent backdrop-blur-none border-none shadow-none w-full max-w-6xl mt-10 max-sm:m-auto max-sm:w-[90%] max-sm:mt-5">
                                <div className="grid grid-cols-4 gap-4 w-full">
                                    <AnimatedContent
                                        distance={50}
                                        initialOpacity={0}
                                        direction="vertical"
                                        duration={0.3}
                                        ease="power3.out"
                                        reverse={true}
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.5}
                                        delay={2}
                                        className='col-span-2 row-span-2 max-sm:col-span-4 max-sm:row-span-2'
                                    >
                                        <ProfileCard />
                                    </AnimatedContent>

                                    <AnimatedContent
                                        distance={50}
                                        initialOpacity={0}
                                        direction="horizontal"
                                        duration={0.3}
                                        ease="power3.out"
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.5}
                                        delay={2.2}
                                        className='col-span-1 max-sm:col-span-2'
                                    >
                                        <div className="h-[180px] md:h-auto max-sm:h-[150px]">
                                            <TechCard
                                                name="React"
                                                description="Core"
                                                icon={SiReact}
                                                color="text-[#61DAFB]"
                                                gradient="from-[#61DAFB]/20"
                                            />
                                        </div>
                                    </AnimatedContent>

                                    <AnimatedContent
                                        distance={50}
                                        initialOpacity={0}
                                        direction="horizontal"
                                        duration={0.3}
                                        reverse={true}
                                        ease="power3.out"
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.5}
                                        delay={2.4}
                                        className='col-span-1 max-sm:col-span-2'
                                    >
                                        <div className="h-[180px] md:h-auto max-sm:h-[150px]">
                                            <TechCard
                                                name="Node.JS"
                                                description="Framework"
                                                icon={SiNodedotjs}
                                                color="text-white"
                                                gradient="from-white/10"
                                            />
                                        </div>
                                    </AnimatedContent>

                                    <AnimatedContent
                                        distance={50}
                                        initialOpacity={0}
                                        direction="horizontal"
                                        duration={0.3}
                                        ease="power3.out"
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.5}
                                        delay={2.4}
                                        className='col-span-2 row-span-1 h-[200px] max-sm:hidden block'
                                    >
                                        <ActivityTerminal />
                                    </AnimatedContent>

                                    <AnimatedContent
                                        distance={100}
                                        initialOpacity={0}
                                        direction="vertical"
                                        duration={0.3}
                                        ease="power3.out"
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.1}
                                        delay={2.5}
                                        className="col-span-4 h-[100px] md:h-auto max-sm:col-span-4 max-sm:row-span-1 max-sm:h-18 z-20 relative"
                                    >
                                        <div className="relative w-full h-full overflow-hidden border border-white/10 rounded-2xl p-4 flex items-center justify-between group bg-white/10">
                                            <div className="absolute inset-0 z-0">
                                                <img
                                                    src="https://i.scdn.co/image/ab67616d0000b273e045aa197ada995407bf92fc"
                                                    alt="Album Art"
                                                    className="w-full h-full object-cover blur-xs scale-110 opacity-80 group-hover:scale-100 transition-transform duration-700 ease-out"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40 z-10" />
                                            </div>

                                            <div className="relative z-20 flex items-center gap-4">
                                                <div className="p-3 max-sm:p-1 bg-[#1DB954] rounded-full text-white shrink-0">
                                                    <SiSpotify size={22} />
                                                </div>

                                                <div className="text-left">
                                                    <div className="text-white font-bold text-sm md:text-base font-sync flex items-center gap-2 max-sm:text-xs">
                                                        Currently listening
                                                    </div>
                                                    <div className="text-white/70 text-xs md:text-sm font-mono mt-0.5">
                                                        Kicking Cars — Panchiko
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="relative z-20 flex gap-1 h-6 md:h-8">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1 bg-[#1DB954] rounded-t animate-pulse"
                                                        style={{
                                                            height: `${Math.random() * 100}%`,
                                                            animationDelay: `${i * 0.15}s`,
                                                            animationDuration: '0.8s'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </AnimatedContent>

                                    <AnimatedContent
                                        distance={50}
                                        initialOpacity={0}
                                        direction="horizontal"
                                        duration={0.5}
                                        ease="power3.out"
                                        animateOpacity
                                        scale={0.5}
                                        threshold={0.1}
                                        delay={2.8}
                                        className="col-span-1"
                                    >
                                        <SocialCard
                                            icon={SiGithub}
                                            link="https://github.com/freakdaniel"
                                            hoverColor="hover:bg-[#24292e]"
                                        />
                                    </AnimatedContent>

                                    <AnimatedContent
                                        distance={50}
                                        initialOpacity={0}
                                        direction="horizontal"
                                        duration={0.3}
                                        ease="power3.out"
                                        animateOpacity
                                        scale={0.5}
                                        threshold={0.1}
                                        delay={3}
                                        className="col-span-1"
                                    >
                                        <SocialCard
                                            icon={SiTelegram}
                                            link="https://t.me/freakgroup"
                                            hoverColor="hover:bg-[#26A5E4]/20"
                                            color="group-hover:text-[#26A5E4]"
                                        />
                                    </AnimatedContent>

                                    <AnimatedContent
                                        distance={50}
                                        initialOpacity={0}
                                        direction="horizontal"
                                        reverse={true}
                                        duration={0.3}
                                        ease="power3.out"
                                        animateOpacity
                                        scale={0.5}
                                        threshold={0.1}
                                        delay={3.2}
                                        className="col-span-1"
                                    >
                                        <SocialCard
                                            icon={SiInstagram}
                                            link="https://instagram.com/_freakdaniel"
                                            hoverColor="hover:bg-gradient-to-br hover:from-[#833AB4]/20 hover:to-[#FD1D1D]/20"
                                            color=""
                                        />
                                    </AnimatedContent>

                                    <AnimatedContent
                                        distance={25}
                                        initialOpacity={0}
                                        direction="horizontal"
                                        reverse={true}
                                        duration={0.3}
                                        ease="power3.out"
                                        animateOpacity
                                        scale={0.5}
                                        threshold={0.1}
                                        delay={3.4}
                                        className="col-span-1"
                                    >
                                        <SocialCard
                                            icon={SiX}
                                            link="https://x.com/whoisfreak"
                                            hoverColor="hover:bg-black"
                                        />
                                    </AnimatedContent>
                                </div>
                            </GlassSurface>
                        </AnimatedContent>
                    </AnimatedContent>
                </div>
            </section>
        </div>
    )
}