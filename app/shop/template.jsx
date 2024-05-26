import Transition from "../lib/Transition";

const template = ({ children }) => {
    return (
        <Transition durationTime={0.3}>
            { children }
        </Transition>
    );
}

export default template;