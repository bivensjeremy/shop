import { aboutContent } from "../database/aboutContent";

const page = () => {
    return (
        <div>
            {aboutContent.map(({ id, header, content }) => (
                <div key={id} className="pb-7">
                    <h2 className="text-3xl">
                        {header}
                    </h2>

                    <p className="">
                        {content}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default page;