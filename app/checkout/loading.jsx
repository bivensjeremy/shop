const loading = () => {
    return (
        <div className="m-auto">
            <div className="overflow-x-auto">
                <div className="card w-96 bg-base-100 shadow-lg m-auto">
                <div className="card-body">
                    <p className="text-center text-accent">Cart is loading...</p>
                    <div className="card-actions justify-center">
                    <span className="loading loading-dots loading-md text-accent" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default loading;