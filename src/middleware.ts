
import { auth } from "./auth"
 
export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname == "/dashboard/range_short") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }

  if (!req.auth && req.nextUrl.pathname == "/dashboard/range_medium") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
  
  if (!req.auth && req.nextUrl.pathname == "/dashboard/range_long") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }


})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }
