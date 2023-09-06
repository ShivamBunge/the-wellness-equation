export default function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="text-primary bg-primary relative mx-auto flex w-full max-w-screen-xl flex-col px-[10vw] md:px-[5vw]">
            {children}
        </div>
    );
}