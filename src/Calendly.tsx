import React, { FC, useEffect } from 'react';

const Calendly: FC<CalendlyProps> = ({
	username,
	eventSlug,
	hideGDPRBanner,
	hideLandingPage,
	hideEventDetails,
	backgroundColor,
	textColor,
	primaryColor,
	height = '630px',
	minWidth = '320px',
	prefill,
}) => {
	let dataUrl = `https://calendly.com/${username}/${eventSlug}?`;
	if (hideGDPRBanner) {
		dataUrl = dataUrl + 'hide_gdpr_banner=1&';
	}
	if (hideLandingPage) {
		dataUrl = dataUrl + `hide_landing_page=1`;
	}
	if (hideEventDetails) {
		dataUrl = dataUrl + `hide_event_details=1`;
	}
	if (backgroundColor) {
		dataUrl = dataUrl + `background_color=${backgroundColor}`;
	}
	if (textColor) {
		dataUrl = dataUrl + `text_color=${textColor}`;
	}
	if (primaryColor) {
		dataUrl = dataUrl + `primary_color=${primaryColor}`;
	}
	useEffect(() => {
		const head = document.querySelector('head');
		const script = document.createElement('script');
		script.setAttribute(
			'src',
			'https://assets.calendly.com/assets/external/widget.js',
		);
		if (prefill) {
		}
		head?.appendChild(script);
	}, []);

	return (
		<div
			className='calendly-inline-widget'
			data-url={dataUrl}
			style={{ height, minWidth }}
		/>
	);
};

interface CalendlyProps<T = any> {
	username: string;
	eventSlug: string;
	hideGDPRBanner?: boolean;
	hideLandingPage?: boolean;
	hideEventDetails?: boolean;
	backgroundColor?: string;
	textColor?: string;
	primaryColor?: string;
	height?: string;
	minWidth?: string;
	prefill?: Record<string, T>;
}

export default Calendly;

<Calendly
	username='kalijonn'
	eventSlug='kalijonn'
	prefill={{ firstName: 'Kali', lastName: 'Charan' }}
></Calendly>;
