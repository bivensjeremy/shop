import {Card, CardBody, CardFooter, Skeleton} from "@nextui-org/react";

const ItemSuspense = () => {
    return (
        <Card className="bg-background w-1/2 sm:w-72 rounded-none sm:rounded-lg" shadow="none">
            <CardBody>
                <Skeleton className="h-60 w-full rounded-md" />

                <div className="flex flex-col gap-1 pt-1">
                    <Skeleton className="rounded-md w-full h-5" />
                    <Skeleton className="rounded-md w-1/2 h-10" />
                    <Skeleton className="rounded-md w-1/3 h-5" />
                    {/* <Skeleton className="rounded-md h-14">lorem ipsum </Skeleton>
                    <Skeleton className="rounded-md">lorem ipsum </Skeleton> */}
                </div>
            </CardBody>

            <CardFooter className="pt-0 flex gap-4">
                <Skeleton className="rounded-md w-full h-10" />
            </CardFooter>
        </Card>
    );
}

export default ItemSuspense;