export function downloadCSV(data: any[], filename = 'leads') {
    if (!data.length) return;

    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
        headers.map((header) => `"${row[header] ?? ''}"`).join(',')
    );

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    const now = new Date();
    const timestamp = now.toISOString()
        .replace(/T/, '-')       
        .replace(/:/g, '-')      
        .replace(/\..+/, '');    

    const fullFileName = `${filename}-${timestamp}.csv`;
    link.setAttribute('download', fullFileName);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
