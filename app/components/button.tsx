export default function Button({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
}) {
    return (
        <button
            className={`bg-blue-500 py-5 px-8 rounded-xl text-white`}
            {...props}
        >
            {children}
        </button>
    );
}