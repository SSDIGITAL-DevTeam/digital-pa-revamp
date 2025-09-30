export default function BlogContent({
  content,
  className,
}: {
  content: string
  className?: string
}) {
  return (
    <div
      className={`
        prose 
        max-w-none 
        body-parser 
        !leading-[120%] 
        text-[18px]
        prose-h1:text-[30px] 
        prose-h1:leading-tight
        ${className}
      `}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}