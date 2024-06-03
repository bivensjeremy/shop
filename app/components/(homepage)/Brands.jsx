import { brandsList } from "@/app/database/brandsList";
import { chonburi_font } from "@/app/lib/fonts";
import Image from "next/image";

const Brands = () => {
    return (
    	<section id="Brands" className="bg-neutral text-accent py-12">
			<h2 className={`${chonburi_font.className} text-4xl font-bold mb-12 text-center`}>All the hottest brands from the year 2006</h2>

			<div className='flex flex-wrap justify-between w-3/4 sm:gap-6 m-auto'>
				{brandsList.map(( {id, icon, brandName} ) => (
					<div key={id} className='relative w-32 h-32 m-auto'>
						<Image
							src={icon}
							alt={brandName}
							className='object-contain'
							fill
							sizes="33vw"
						/>
					</div>
				))}
			</div>
    	</section>
    );
}

export default Brands;