import LottieLoading from "./components/LottieLoading";

const loading = () => {
    return (
        <section className="h-screen text-center pt-24">
            <LottieLoading />
            <p className="text-sm italic font-semibold">Loading...</p>
        </section>
    );
}

export default loading;