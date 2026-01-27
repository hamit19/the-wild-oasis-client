// import { NextRequest, NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account/:path*"],
};

// export async function middleware(request: NextRequest) {
//   console.log(request);

//   const session = await auth();

//   if (!session) {
//     const url = request.nextUrl.clone();

//     url.pathname = "/login";

//     return NextResponse.redirect(url);
//   }
// }
