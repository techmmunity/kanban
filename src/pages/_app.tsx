import { AppProps } from "next/app";
import dynamic from "next/dynamic";

import { Head } from "components/Head";

import GlobalStyle from "styles/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head />
		<Component {...pageProps} />
		<GlobalStyle />
	</>
);

export default dynamic(() => Promise.resolve(MyApp), {
	ssr: false,
});
