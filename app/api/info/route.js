import { NextResponse } from "next/server";
import {info}  from './data';




export async function GET(req)
{
     return NextResponse.json(info)
}

