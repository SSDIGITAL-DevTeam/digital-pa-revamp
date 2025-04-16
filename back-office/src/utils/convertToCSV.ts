export function downloadCSV(data: any, filename = 'data.csv') {
    // Ambil array user dari objek { user: {...} }
    const flatData = data.map((item: any) => item.user)

    if (!flatData.length) return

    const headers = Object.keys(flatData[0])
    const rows = flatData.map((row: { [x: string]: any }) =>
        headers.map((header) => `"${row[header] ?? ''}"`).join(',')
    )

    const csvContent = [headers.join(','), ...rows].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', filename)

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
