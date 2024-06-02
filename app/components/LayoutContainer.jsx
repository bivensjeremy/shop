const LayoutContainer = ({children}) => {
    return (
        <section className="bg-default text-accent">
            <div className="py-10 w-11/12 sm:w-2/3 m-auto text-justify">
                {children}
            </div>
        </section>
    );
}

export default LayoutContainer;