'use client'
import Error from "@/public/lottie_error.json"
import dynamic from "next/dynamic";

const Lottie = dynamic(()=> import('lottie-react'), {ssr: false});

const LottieError = () => {
    return (
        <Lottie
            animationData={Error}
            className="w-96 m-auto"
        />
    );
}

export default LottieError;