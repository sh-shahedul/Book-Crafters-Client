// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   return NextResponse.redirect(new URL('/login', request.url))
// }
 
// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/aboutUs/:path*',
// }

import { NextResponse } from 'next/server'

export function proxy(request) {
  // ✅ Cookie থেকে token read
  const token = request.cookies.get('token')?.value;

  // ✅ token না থাকলে → login এ redirect
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // ✅ token থাকলে → About page access allow
  return NextResponse.next();
}

export const config = {
  matcher:[ '/qq/:path*'],
}
