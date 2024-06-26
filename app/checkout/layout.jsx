import Banner from "../components/Banner";
import LayoutContainer from "../components/LayoutContainer";

const layout = ({children}) => {
    return (
        <div className="bg-default min-h-screen">
            <Banner title='Shopping Cart' />
            
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </div>
    );
}

export default layout;