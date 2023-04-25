import {NextResponse} from "next/server";
import testjson from './test.json';

export async function GET(request: Request) {
    return NextResponse.json(testjson)
}
