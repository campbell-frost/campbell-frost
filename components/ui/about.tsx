import { Highlight } from "@/components/ui/hero-highlight";
import { MeCard } from "./me-card";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import Image from "next/image";

export default function About() {
    return (
        <CardContainer>
            <CardBody className=" flex items-center justify-between container dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">

                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <CardItem
                        translateZ="100"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        Hi, I'm Campbell
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="150"
                        className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300"
                    >
                        <h1 className="text-white text-6xl font-bold mb-10 leading-tight">
                            I am a full stack <Highlight>software engineer</Highlight> with a passion for crafting digital solutions
                        </h1>
                    </CardItem>
                    <CardItem
                        translateZ="100"
                        className="text-white text-lg font-semibold"
                    >

                        <p >Contact me - <a href="mailto:campbellsfrost@gmail.com" className="email-link">campbellsfrost@gmail.com</a></p>
                    </CardItem>
                </div>
                <div className="w-full md:w-1/3">
                    <CardItem translateZ="180" className="w-full mt-4">
                        <Image
                            src="/images/me_rock.png"
                            height="1000"
                            width="1000"
                            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                </div>


            </CardBody>
        </CardContainer>
    );
}
