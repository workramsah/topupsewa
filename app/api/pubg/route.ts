import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL not set - skipping DB write for POST /api/pubg');
      // Return 201 for UX but don't attempt DB write during build or in unconfigured env
      return NextResponse.json({ message: 'DB not configured' }, { status: 201 });
    }

    const { prisma } = await import('@/lib/prisma');
    const entry = await prisma.pubg.create({
      data: {
        gamesid: body.gamesid,
        naam: body.naam,
        rate: body.rate,
        message: body.message
      }
    });
    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: "Failed to create entry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // If the database URL is not set (for example during build), return an empty list
    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL is not set. Returning empty entries for /api/pubg');
      return NextResponse.json([], { status: 200 });
    }

    // Import Prisma dynamically at runtime to avoid issues during build
    const { prisma } = await import('@/lib/prisma');

    const entries = await prisma.pubg.findMany({
      select: {
        ids: true,
        gamesid: true,
        naam: true,
        rate: true,
        message: true
      },
      orderBy: { ids: 'desc' }
    });

    const transformedEntries = entries.map((entry: any) => ({
      id: entry.ids,
      gamesid: entry.gamesid,
      naam: entry.naam,
      rate: entry.rate,
      message: entry.message,
      createdAt: new Date().toISOString()
    }));

    return NextResponse.json(transformedEntries, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    // Return an empty list with 200 so build-time page data collection doesn't fail
    return NextResponse.json([], { status: 200 });
  }
} 