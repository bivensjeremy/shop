import { NextUIProvider } from "@nextui-org/react";

const NextUI_Provider = ({ children }) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}

export default NextUI_Provider;