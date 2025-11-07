import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event, { IEvent } from '@/database/event.model';

type RouteParams = {
    params: { slug: string };
};


export async function GET(
    req: NextRequest,
    { params }: RouteParams
): Promise<NextResponse> {
    try {
        await connectDB();
        // Await and extract slug from params
        const { slug } = params;
        // validate slug parameter

        if (!slug || typeof slug !== 'string' || slug.trim() === '') {
            return NextResponse.json(
                { message: 'Invalid slug parameter' },
                { status: 400 }
            )
        }

        // sanitize slug (remove any potential malicious input)
        const sanitizedSlug = slug.trim().toLocaleLowerCase();

        //Query event by slug
        const event = await Event.findOne({ slug: sanitizedSlug }).lean();

        if (!event) {
            return NextResponse.json(
                { message: `Event with slug '${sanitizedSlug}' not found` },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { message: 'Event fetched successfully', event },
            { status: 200 }
        )

    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error fetching event by slug:', error);
        }

        // Handle specific error types
        if (error instanceof Error) {
            if (error.message.includes('MONGODB_URI')) {
                return NextResponse.json(
                    { message: 'Database connection error' },
                    { status: 500 }
                );
            }

            return NextResponse.json(
                { message: 'Failed to fetch event', error: error.message },
                { status: 500 }
            )
        }
        return NextResponse.json(
            { message: 'An unexpected error occured' },
            { status: 500 }
        );
    }
}