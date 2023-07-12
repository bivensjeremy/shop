import { apparelCategories } from '@/app/database/apparelCategories';
import Image from 'next/image';
import NavLink from '../NavLink';
import { chonburi_font } from '@/app/lib/fonts';




const Categories = () => {
    return (
        <section id='Categories' className='m-auto py-12'>
            <div className=''>
                <h4 className={`${chonburi_font.className} mb-6 text-4xl font-semibold text-center`}>Shop By Collection</h4>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 m-auto p-2">
                {apparelCategories.map(({ id, image, title, slug }) => (
                    <div key={id} className="w-full lg:w-3/4 bg-[#F0F0F0] rounded-md mx-auto">
                        <div className="py-5">
                            <div className="h-96 relative">
                                <Image
                                    src={image}
                                    alt={`${title} image`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                                    className='object-contain p-5 m-auto'
                                />
                            </div>

                            <div className="text-center">
                                <NavLink href={`/shop/${slug}`} className="btnCSS">
                                    Shop {title}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;