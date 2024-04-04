import { Highlight } from "@/components/ui/hero-highlight";

export default function About() {
    return (
        <div className="container mx-auto px-8">
            <div className="flex flex-wrap items-center justify-between pt-40">
                <div className="w-full md:w-1/2 mb-10 md:mb-0">

                    <h5 className="text-white text-4xl font-semibold mb-5 ">Hi, I’m Campbell</h5>
                    <div className="mb-5">
                        <h1 className="text-white text-6xl font-bold mb-10 leading-tight">
                            I am a full stack <Highlight>software engineer</Highlight> with a passion for crafting digital solutions
                        </h1>

                        <p className="text-white text-lg font-semibold">Contact me - <a href="mailto:campbellsfrost@gmail.com" className="email-link">campbellsfrost@gmail.com</a></p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 ">
                    <img src="./images/me_rock.png" className="w-full border-radius" alt="Picture of Campbell Frost" />
                </div>
            </div>

        </div>
    );
}
