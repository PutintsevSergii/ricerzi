import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const contentPath = searchParams.get('path')

  if (!contentPath) {
    return NextResponse.json(
      { error: 'Path parameter is required' },
      { status: 400 }
    )
  }

  try {
    const filePath = path.join(process.cwd(), 'src/content', contentPath)
    const content = await fs.readFile(filePath, 'utf-8')
    return new NextResponse(content)
  } catch (error) {
    console.error('Error reading content file:', error)
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    )
  }
} 