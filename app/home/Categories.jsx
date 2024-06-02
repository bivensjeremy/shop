import Image from 'next/image';
import { apparelCategories } from '@/app/data/apparelCategories';
import Link from 'next/link';
import Tagline from '../components/Tagline';

const Categories = () => {
    return (
        <section id='Categories' className='bg-accent m-auto py-12 '>
            <Tagline text='Shop By Collection' />

            <div className="container grid grid-cols-2 m-auto mt-6 sm:w-3/4">
                {apparelCategories.map(({ id, image, title, icon, slug }) => (
                    <div key={id} className="card w-full h-96 rounded-none">
                        <figure>
                            <Image
                                src={image}
                                alt={`${title} image`}
                                // fill
                                // width={270}
                                // height={400}
                                sizes='50vw'
                                className='rounded-lg object-cover'
                            />
                        </figure>

                        <div className="card-body glass py-4">
                            <p></p>
                            <div className="card-actions justify-center sm:justify-between">
                                <div className="hidden sm:flex gap-2">
                                    <Image
                                        className="object-contain"
                                        alt={`${title} icon`}
                                        src={icon}
                                        height={40}
                                    />

                                    <div className="flex flex-col m-auto">
                                        <p className="text-md text-default uppercase">Shop {title}</p>
                                    </div>
                                </div>
                                    
                                <Link 
                                    role='button' 
                                    className='btn btn-primary'
                                    href={`/shop/${slug}`} 
                                >
                                        Shop<span className='flex sm:hidden'>{title}</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    // <div key={id} className="card w-full h-64 glass">
                    //     <figure>
                    //         <Image
                    //             alt={`${title} image`}
                    //             className="object-cover"
                    //             src={image}
                    //             fill
                    //             sizes='50vw'
                    //             // width={270}
                    //             // height={400}
                    //         />

                    //         {/* <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/> */}
                    //     </figure>

                    //     <div className="card-actions justify-center sm:justify-between p-4">
                    //         <div className="hidden sm:flex gap-2">
                    //             <Image
                    //                 className="object-contain"
                    //                 alt={`${title} icon`}
                    //                 src={icon}
                    //                 height={40}
                    //                 // width={40}
                    //                 // height={270}
                    //             />
                    //                 <div className="flex flex-col">
                    //                     <p className="text-md text-default m-auto uppercase">Shop {title}</p>
                    //                 </div>
                    //         </div>
                                    
                    //         <Link 
                    //             role='button' 
                    //             className='btn btn-primary'
                    //             href={`/shop/${slug}`} 
                    //         >
                    //                 Shop<span className='flex sm:hidden'>{title}</span>
                    //         </Link>
                            
                            
                                            
                            
                    //         {/* <div className="card-actions justify-end">
                    //             <button className="btn btn-primary">Learn now!</button>
                    //         </div> */}
                    //     </div>
                    // </div>
                    
                    // <div key={id}>
                    //     <div className="card glass w-full h-[400px]">
                    //         <Image
                    //             alt={`${title} image`}
                    //             className="z-0 w-full h-full object-cover"
                    //             src={image}
                    //             fill
                    //             sizes='50vw'
                    //             // width={270}
                    //             // height={400}
                    //         />

                    //         <div className="glass absolute bg-secondary bottom-0 z-10 border-t-1 border-default-600 min-h-20">
                    //             <div className="hidden sm:flex flex-grow gap-2 items-center m-auto">
                    //                 <Image
                    //                     alt={`${title} icon`}
                    //                     className="object-contain"
                    //                     src={icon}
                    //                     height={40}
                    //                     // width={40}
                    //                     // height={270}
                    //                 />
                    //                 <div className="flex flex-col">
                    //                     <p className="text-md text-default uppercase">Shop {title}</p>
                    //                 </div>
                    //             </div>
                    //             <div className='flex m-auto'>
                    //                 {/* <Button 
                    //                     as={Link} 
                    //                     href={`/shop/${slug}`} 
                    //                     radius="md" 
                    //                     size="md" 
                    //                     color="primary"
                    //                 >
                    //                         Shop<span className='flex sm:hidden'>{title}</span>
                    //                 </Button> */}
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;