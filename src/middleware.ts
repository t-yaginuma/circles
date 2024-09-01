import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getUser } from "@/actions/auth";

export async function middleware(request: NextRequest) {
  // update user's auth session
  // const test = await getUser();
  // console.log("==========");
  // console.log(test);
  // const path = new URL(request.url).pathname;
  // console.log(path);
  // console.log("hit");
  // console.log(test);
  // return await updateSession(request);
  // return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
