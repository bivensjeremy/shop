import { aboutContent } from "../data/aboutData";

const Page = () => {
    return (
        <div>
            {aboutContent.map(({ id, header, content }) => (
                <div key={id} className="pb-7">
                    <h2 className="text-3xl font-semibold">
                        {header}
                    </h2>

                    <p className="test-base">
                        {content}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Page;
