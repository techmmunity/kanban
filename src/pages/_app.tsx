import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";

import GlobalStyle from "styles/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Kanban</title>
		</Head>
		<Component {...pageProps} />
		<GlobalStyle />
	</>
);

export default dynamic(() => Promise.resolve(MyApp), {
	ssr: false,
});
