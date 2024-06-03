import { apparelCategories } from '@/app/database/apparelCategories';
import Image from 'next/image';
import NavLink from '../NavLink';
import { chonburi_font } from '@/app/lib/fonts';
import Tagline from '../Tagline';
import Link from 'next/link';


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
            ))}
            </div>
        </section>
    );
}

export default Categories;