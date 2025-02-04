import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY
    const lat = 40.4165
    const lon = -3.70256
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    const res = await axios.get(url)
    return NextResponse.json(res.data)
  } catch (error) {
    console.log(error)

    return new Response("Error fetching forecast data", {status: 500})
  }
}