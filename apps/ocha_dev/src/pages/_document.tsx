import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="ja">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png" />
				<meta name="theme-color" content="#fff" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
