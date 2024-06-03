import { parisienne_font } from '@/app/lib/fonts';
import NavLink from '../NavLink';
import Link from 'next/link';

const Splash = () => {
    return (
        <section className="h-screen">
            <div className="flex flex-col justify-center text-center text-neutral m-auto h-3/4 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <div>
                    <h1 className={`${parisienne_font.className} text-6xl justify-center my-5`}>
                        Bivens<span className="text-primary">&apos;s</span> Boutique
                    </h1>
                </div>

                <div className="flex flex-row mx-auto space-x-6">
                    <div className="flex h-full items-center justify-center">
                        <div>
                            <h4 className="mb-6 text-xl font-semibold">
                                A Custom Collection of Premium Fashion.
                            </h4>
                            <Link role='button' href='/shop' className='btn btn-primary btn-wide'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Splash;