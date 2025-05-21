import 'locomotive-scroll/dist/locomotive-scroll.css';
export const metadata = {
    title: 'My App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}