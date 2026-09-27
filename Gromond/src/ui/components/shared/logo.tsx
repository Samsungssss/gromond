/**
 * Shared Logo Component
 *
 * Uses the original, unedited logo at its natural size.
 *
 * @example
 * <Logo className="h-9 w-auto" />
 * <Logo className="h-9 w-auto" inverted />
 */

interface LogoProps {
	className?: string;
	/** Accessible label for the logo */
	ariaLabel?: string;
	/** Light logo for dark/inverted backgrounds (footer) */
	inverted?: boolean;
}

const LOGO_URL = "https://ik.imagekit.io/f8dc2modt/logo.png";

export const Logo = ({ className, ariaLabel = "Paper by Saleor", inverted = false }: LogoProps) => {
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img src={LOGO_URL} alt={ariaLabel} className={`${className ?? ""}`} />
	);
};
