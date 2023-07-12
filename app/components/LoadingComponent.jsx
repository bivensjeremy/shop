'use client'

import { useEffect, useState } from "react";



const LoadingComponent = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 100) {
                setCount(count + 1);
            }
        }, 50)
        return () => clearInterval(interval);
    }, [count]);


    return (
        <div className="bg-[#f9d949] rounded-full p-1 text-center text-xs font-medium leading-none text-[#3C486B]" style={{ 'width': count + '%'}}>
            {count}
        </div>
    );
}

export default LoadingComponent;