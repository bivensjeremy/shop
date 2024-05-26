import Image from 'next/image';
import { apparelCategories } from '@/app/data/apparelCategories';
import {Card, CardHeader, CardFooter, Button} from "@nextui-org/react";
import Link from 'next/link';
import Tagline from '../Tagline';

const Categories = () => {
    return (
        <section id='Categories' className='bg-foreground m-auto py-12 '>
            <Tagline text='Shop By Collection' />

            <div className="container grid grid-cols-2 gap-0 m-auto mt-6">
                {apparelCategories.map(({ id, image, title, icon, slug }) => (
                    <div key={id}>
                        <Card isFooterBlurred className="w-full h-[400px]" radius='none'>
                            {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                                <h4 className="text-white/90 font-medium text-xl">{title} Your checklist for better sleep</h4>
                            </CardHeader> */}

                            <Image
                                alt={`${title} image`}
                                className="z-0 w-full h-full object-cover"
                                src={image}
                                fill
                                sizes='50vw'
                                // width={270}
                                // height={400}
                            />

                            <CardFooter className="absolute bg-background/40 bottom-0 z-10 border-t-1 border-default-600 min-h-20">
                                <div className="hidden sm:flex flex-grow gap-2 items-center m-auto">
                                    <Image
                                        alt={`${title} icon`}
                                        className="object-contain"
                                        src={icon}
                                        height={40}
                                        // width={40}
                                        // height={270}
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-md text-default uppercase">Shop {title}</p>
                                    </div>
                                </div>
                                <div className='flex m-auto'>
                                    <Button 
                                        as={Link} 
                                        href={`/shop/${slug}`} 
                                        radius="md" 
                                        size="md" 
                                        color="primary"
                                    >
                                            Shop<span className='flex sm:hidden'>{title}</span>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;