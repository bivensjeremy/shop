import LoadingComponent from "../components/LoadingComponent";

const loading = () => {
    return (
        <div className="w-1/2 m-auto text-center h-screen">
            <div className="flex flex-col justify-center h-full italic pb-2">
                <h3>Your shopping experience is loading</h3>
                <LoadingComponent />
            </div>
        </div>
    );
}

export default loading;