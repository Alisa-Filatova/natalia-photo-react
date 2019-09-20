import React from 'react';
import styles from './Loader.less';

const Loader = () => (
	<div className={styles.root}>
		<svg
			xmlnssvg="http://www.w3.org/2000/svg"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.0"
			width="120"
			height="120"
			viewBox="0 0 128 128"
			xmlSpace="preserve"
		>
			<g>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#e60e8f"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#f9c7e5" transform="rotate(30 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#f7b6dd" transform="rotate(60 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#f6a6d6" transform="rotate(90 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#f495ce" transform="rotate(120 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#f284c6" transform="rotate(150 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#f073be" transform="rotate(180 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ef62b6" transform="rotate(210 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ed51ae" transform="rotate(240 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#eb41a7" transform="rotate(270 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ea309f" transform="rotate(300 64 64)"/>
				<path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#e81f97" transform="rotate(330 64 64)"/>
				<animateTransform
					attributeName="transform"
					type="rotate"
					values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
					calcMode="discrete"
					dur="1080ms"
					repeatCount="indefinite"
				/>
			</g>
		</svg>
		<div className={styles.title}>Loading....</div>
	</div>
);

export default Loader;
