# Cara Hide/Show Section di Homepage

## Metode 1: Menggunakan Komentar (Recommended untuk Development)

Untuk menyembunyikan section, cukup comment out section tersebut dengan `{/* */}`:

```tsx
{/* SECTION INI DISEMBUNYIKAN */}
{/* <section className='py-8 md:py-16'>
    <MeetOurTeam />
</section> */}
```

Untuk menampilkan kembali, hapus komentar:

```tsx
{/* SECTION INI DITAMPILKAN */}
<section className='py-8 md:py-16'>
    <MeetOurTeam />
</section>
```

## Metode 2: Menggunakan Conditional Rendering (Recommended untuk Production)

Tambahkan state untuk mengontrol visibility:

```tsx
"use client"
import { useState } from 'react'
// ... imports lainnya

export default function Home() {
    // State untuk kontrol visibility sections
    const [showTeamSection, setShowTeamSection] = useState(true)
    const [showFAQSection, setShowFAQSection] = useState(true)
    
    return (
        <main>
            {/* ... sections lainnya ... */}
            
            {/* meet our team section - dengan conditional */}
            {showTeamSection && (
                <section className='py-8 md:py-16'>
                    <MeetOurTeam />
                </section>
            )}
            
            {/* faq section - dengan conditional */}
            {showFAQSection && (
                <section className='py-8 pb-32'>
                    <FAQ value={homeFAQ} />
                </section>
            )}
        </main>
    )
}
```

Untuk hide/show, ubah nilai state:
- `setShowTeamSection(false)` → Hide team section
- `setShowTeamSection(true)` → Show team section

## Metode 3: Menggunakan CSS Class (Untuk Animasi)

Tambahkan className conditional:

```tsx
<section className={`py-8 md:py-16 ${showTeamSection ? 'block' : 'hidden'}`}>
    <MeetOurTeam />
</section>
```

## Metode 4: Menggunakan Environment Variable (Untuk Feature Flag)

Di file `.env.local`:
```
NEXT_PUBLIC_SHOW_TEAM_SECTION=true
NEXT_PUBLIC_SHOW_FAQ_SECTION=true
```

Di `page.tsx`:
```tsx
{process.env.NEXT_PUBLIC_SHOW_TEAM_SECTION === 'true' && (
    <section className='py-8 md:py-16'>
        <MeetOurTeam />
    </section>
)}
```

## Contoh Penggunaan di Homepage Anda

File: `src/app/page.tsx`

Lokasi section yang baru dibuat:
- **Line ~79-85**: Meet Our Team Section (antara OurServices dan FAQ)

Untuk hide section ini, gunakan salah satu metode di atas.

### Quick Hide (Metode 1):
```tsx
{/* meet our team section */}
{/* <section className='py-8 md:py-16'>
    <MeetOurTeam />
</section> */}
{/* end of meet our team section */}
```

### Dynamic Hide/Show (Metode 2):
Tambahkan state di component dan gunakan conditional rendering seperti contoh di atas.
