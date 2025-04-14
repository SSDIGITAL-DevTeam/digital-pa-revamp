import fsPromises from 'fs/promises'

export async function GET() {
    const fileName = 'Digital PA Singapore - SME Package.pdf'
    const filePath = `${process.cwd()}/src/assets/our-packages/${fileName}`
    const file = await fsPromises.readFile(filePath)

    return new Response(file, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename="${fileName}"`,
        },
    })
}
