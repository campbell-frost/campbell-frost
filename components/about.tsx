import { Highlight } from "@/components/ui/hero-grid";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import Image from "next/image";

export default function About() {
    return (

        <CardContainer divisiorValue={200} className=" mt-20">
            <CardBody className="flex flex-wrap items-center justify-between dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border bg-black">

                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <CardItem
                        translateZ="40"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        Hi, I'm Campbell
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white text-6xl mt-6 dark:text-white font-bold mb-10 leading-tight"
                    >
                        I am a full stack <Highlight>software engineer</Highlight> with a passion for crafting digital solutions
                    </CardItem>
                    <CardItem
                        translateZ="40"
                        className="text-white text-lg font-semibold"
                    >
                        <h5 >Contact me - <a href="mailto:campbellsfrost@gmail.com" className="email-link">campbellsfrost@gmail.com</a></h5>
                    </CardItem>
                </div>
                <div className="w-full md:w-1/3">
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/images/me_rock.png"
                            height="1500"
                            width="1500"
                            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>

    );
}
