import Banner from "../components/(store)/Banner";
import LayoutContainer from "../components/(store)/LayoutContainer";

const layout = ({children}) => {
    return (
        <div className="min-h-screen">
            <Banner title='Shopping Cart' />
            
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </div>
    );
}

export default layout;