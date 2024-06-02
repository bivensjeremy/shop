
const ItemSuspense = () => {
    return (
        <div className="card bg-slate-200 w-1/2 sm:w-72 rounded-none sm:rounded-lg">
            <div className="card-body p-4">
                <div className="skeleton h-60 w-full rounded-md" />

                <div className="flex flex-col gap-1 pt-1">
                    <div className="skeleton rounded-md w-full h-5" />
                    <div className="skeleton rounded-md w-1/2 h-10" />
                    <div className="skeleton rounded-md w-1/3 h-5" />
                    {/* <Skeleton className="rounded-md h-14">lorem ipsum </Skeleton>
                    <Skeleton className="rounded-md">lorem ipsum </Skeleton> */}
                </div>
            </div>

            <div className="card-actions px-4 pb-4">
                <div className="skeleton rounded-md w-full h-12" />
            </div>
        </div>
    );
}

export default ItemSuspense;