import { brandsList } from "@/app/database/brandsList";
import { chonburi_font } from "@/app/lib/fonts";
import Image from "next/image";

const Brands = () => {
    return (
    	<section id="Brands" className="py-10 w-full">
			<h2 className={`${chonburi_font.className} text-4xl font-bold mb-12 text-center`}>All the hottest brands from the year 2006</h2>

			<div className='flex flex-wrap gap-5 w-2/3 m-auto'>
				{brandsList.map(( {id, icon, brandName} ) => (
					<div key={id} className='w-48 h-auto m-auto'>
						<Image
							src={icon}
							alt={brandName}
							className=''
							width={150}
						/>
					</div>
				))}
			</div>
    	</section>
    );
}

export default Brands;