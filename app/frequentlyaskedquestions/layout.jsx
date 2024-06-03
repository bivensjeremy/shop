import Banner from "../components/(store)/Banner";
import LayoutContainer from "../components/(store)/LayoutContainer";

const layout = ({children}) => {
    return (
        <div>
            <Banner title="Frequently Asked Questions" />

            <LayoutContainer>
                {children}
            </LayoutContainer>
        </div>
    );
}

export default layout;