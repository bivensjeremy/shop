import Banner from "../components/Banner";
import LayoutContainer from "../components/LayoutContainer";

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