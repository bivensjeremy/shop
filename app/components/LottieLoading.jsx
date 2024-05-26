'use client'
import Loading from "@/public/lottie_loading2.json"
import dynamic from "next/dynamic";

const Lottie = dynamic(()=> import('lottie-react'), {ssr: false});

const LottieLoading = () => {
    return (
        <Lottie
            animationData={Loading}
            className="w-28 m-auto"
        />
    );
}

export default LottieLoading;