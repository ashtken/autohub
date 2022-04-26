import { Global, css } from "@emotion/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<Global
				styles={css`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
							Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
							sans-serif;
						background-color: #202124;
					}
					a {
						color: inherit;
						text-decoration: none;
					}
					* {
						box-sizing: border-box;
					}
				`}
			/>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default App;
