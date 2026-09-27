/**
 * Shared Logo Component
 *
 * - Light backgrounds: https://ik.imagekit.io/f8dc2modt/ChatGPT%20Image%20Sep%2026,%202026,%2005_33_19%20PM.png
 * - Dark/inverted backgrounds: https://ik.imagekit.io/f8dc2modt/ChatGPT%20Image%20Sep%2026,%202026,%2005_30_03%20PM.png
 *
 * @example
 * <Logo className="h-7 w-auto" />
 * <Logo className="h-7 w-auto" inverted />
 */

interface LogoProps {
	className?: string;
	/** Accessible label for the logo */
	ariaLabel?: string;
	/** Light logo for dark/inverted backgrounds (footer) */
	inverted?: boolean;
}

const LIGHT_LOGO = "https://ik.imagekit.io/f8dc2modt/ChatGPT%20Image%20Sep%2026,%202026,%2005_33_19%20PM.png";
const DARK_LOGO = "https://ik.imagekit.io/f8dc2modt/ChatGPT%20Image%20Sep%2026,%202026,%2005_30_03%20PM.png";

export const Logo = ({ className, ariaLabel = "Paper by Saleor", inverted = false }: LogoProps) => {
	const src = inverted ? DARK_LOGO : LIGHT_LOGO;

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img src={src} alt={ariaLabel} width={100} height={23} className={`aspect-[100/23] ${className ?? ""}`} />
	);
};
