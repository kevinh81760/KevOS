import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle webpack HMR requests to prevent 404 errors
  if (pathname === '/__webpack_hmr' || pathname.startsWith('/__webpack_hmr')) {
    return new NextResponse(
      JSON.stringify({ message: 'Turbopack HMR is active' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  // Handle /events endpoint (also related to HMR)
  if (pathname === '/events' || pathname.startsWith('/events')) {
    return new NextResponse(
      JSON.stringify({ message: 'Turbopack events endpoint' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/__webpack_hmr/:path*',
    '/events/:path*',
  ],
};
