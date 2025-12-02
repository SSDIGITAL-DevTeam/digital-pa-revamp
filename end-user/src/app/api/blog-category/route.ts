import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.digital-pa.com.sg/api/v1';

export async function GET(request: NextRequest) {
    try {
        // Get all query parameters from the incoming request
        const searchParams = request.nextUrl.searchParams;

        // Build the query string
        const queryString = searchParams.toString();
        const url = `${API_BASE_URL}/blog-category${queryString ? `?${queryString}` : ''}`;

        // Forward the request to the external API
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        // Get the response data
        const data = await response.json();

        // Return the response with appropriate status
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error('Blog category API proxy error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch blog category data' },
            { status: 500 }
        );
    }
}
