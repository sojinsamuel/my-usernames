import { NextResponse, NextRequest } from "next/server";

import { jwtVerify, createRemoteJWKSet } from "jose";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

export async function middleware(req: NextRequest) {
  const hanko = req.cookies.get("hanko")?.value;
  const path = req.nextUrl.pathname;
  const JWKS = createRemoteJWKSet(
    new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  );

  try {
    const verifiedJWT = await jwtVerify(hanko ?? "", JWKS);
    if (verifiedJWT && path === "/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  } catch {
    // Prevent infinite redirect loop when the page is /login and if jwtVerify fails then redirect to /login
    if (path !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard", "/login", "/account"],
};
