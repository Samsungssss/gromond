import "server-only";

import { createSaleorAuthClient } from "@saleor/auth-sdk";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_MAX_AGE, REFRESH_TOKEN_MAX_AGE } from "./constants";
import { createCookieTokenStorage } from "./cookie-token-storage";

const getSaleorApiUrl = () => process.env.NEXT_PUBLIC_SALEOR_API_URL || "https://demo.saleor.io/graphql/";

/**
 * Server-side cookie storage for auth tokens, with an in-memory cache layer so
 * the SDK's refresh-then-reread flow works during RSC render (where cookie
 * writes are not allowed). See `createCookieTokenStorage`.
 */
const createServerCookieStorage = async () => {
	const cookieStore = await cookies();
	const saleorApiUrl = getSaleorApiUrl();

	return createCookieTokenStorage(cookieStore, saleorApiUrl, {
		secure: process.env.NODE_ENV === "production",
		accessTokenMaxAge: ACCESS_TOKEN_MAX_AGE,
		refreshTokenMaxAge: REFRESH_TOKEN_MAX_AGE,
	});
};

export const getServerAuthClient = async () => {
	const saleorApiUrl = getSaleorApiUrl();
	const serverCookieStorage = await createServerCookieStorage();
	return createSaleorAuthClient({
		saleorApiUrl,
		refreshTokenStorage: serverCookieStorage,
		accessTokenStorage: serverCookieStorage,
	});
};
