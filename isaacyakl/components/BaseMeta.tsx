import Head from "next/head";
import { useRouter } from "next/router";
import { fName, lName, nick, siteURL, twitter } from "../data/meta";
import PropTypes from "prop-types";

function BaseMeta({ title, desc, author, robots, googlebot, shareURL, shareImg, shareType }: { title: string; desc: string; author: string; robots: string; googlebot: string; shareURL: string; shareImg: string; shareType: string }) {
	const router = useRouter();

	if (typeof shareURL == "string" && shareURL == BaseMeta.defaultProps.shareURL) {
		shareURL = siteURL.substring(0, siteURL.length - 1) + router.asPath;
	}

	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="canonical" href={siteURL.substring(0, siteURL.length - 1) + router.asPath} />
			<title>{title}</title>
			<meta name="theme-color" content="#03C03C" />
			{/*Theme Color for Chrome, Firefox OS and Opera*/}
			<meta name="description" content={desc} />
			<meta name="robots" content={robots} />
			<meta name="googlebot" content={googlebot} />
			<meta name="author" content={author} />

			{/* Favicons */}
			{/* Source: https://github.com/audreyfeldroy/favicon-cheat-sheet */}
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#03c03c" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
			<meta name="theme-color" content="#000000" />
			{/* Source: https://realfavicongenerator.net/favicon_result?file_id=p1fap77nug1fdj1rdl1f447ld93g6#.YPJMAuhKguU */}
			<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png" />
			<meta name="application-name" content={`${nick}'s Website`} />
			<meta name="msapplication-tooltip" content="Tooltip" />
			<meta name="msapplication-config" content="/browserconfig.xml" />

			{/* Social Media Meta Tags */}
			{/* Sources: https://css-tricks.com/essential-meta-tags-social-media/, https://megatags.co/#generate-tags */}
			{/* Search Engines */}
			<meta name="description" content={desc} />
			<meta name="image" content={shareImg} />
			{/* Schema.org for Google */}
			<meta itemProp="name" content={title} />
			<meta itemProp="description" content={desc} />
			<meta itemProp="image" content={shareImg} />
			{/* Twitter */}
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={desc} />
			<meta name="twitter:image" content={shareImg} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={`@${twitter.substring(twitter.lastIndexOf("/") + 1)}`} />
			{/* Open Graph general (Facebook & Pinterest)  */}
			<meta property="og:title" content={title} />
			<meta property="og:type" content={shareType} />
			<meta property="og:url" content={shareURL} />
			<meta property="og:image" content={shareImg} />
			<meta property="og:description" content={desc} />
		</Head>
	);
}

BaseMeta.defaultProps = {
	title: `${fName} "${nick}" ${lName}\'s Website`,
	desc: `${nick}'s personal website: have a look at ${nick}'s portfolio, résumé, and businesses or contact information.`,
	shareURL: siteURL,
	robots: "index,follow",
	googlebot: "index,follow",
	author: `${fName} "${nick}" ${lName.substring(0, 1)}.`,
	shareImg: siteURL + "yak-social-image.jpg",
	shareType: "website",
};

BaseMeta.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	shareURL: PropTypes.string,
	robots: PropTypes.string,
	googlebot: PropTypes.string,
	author: PropTypes.string,
	shareImg: PropTypes.string,
	shareType: PropTypes.string,
};

export default BaseMeta;
