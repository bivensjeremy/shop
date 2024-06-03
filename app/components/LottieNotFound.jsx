'use client'
import NotFound from "@/public/lottie_notfound.json"
import dynamic from "next/dynamic";

const Lottie = dynamic(()=> import('lottie-react'), {ssr: false});

const LottieNotFound = () => {
    return (
        <Lottie
            animationData={NotFound}
            className="w-60 m-auto"
        />
    );
}

export default LottieNotFound;