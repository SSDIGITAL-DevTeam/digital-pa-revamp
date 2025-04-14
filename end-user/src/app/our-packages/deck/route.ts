import fsPromises from 'fs/promises'

export async function GET(): Promise<Response> {
    const fileName: string = 'Digital PA Singapore.pdf'
    const filePath: string = `${process.cwd()}/src/assets/our-packages/${fileName}`
    const file: Buffer = await fsPromises.readFile(filePath)

    return new Response(file, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename="${fileName}"`,
        },
    })
}
