export default function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="text-primary relative mx-auto flex w-full max-w-screen-lg flex-col px-[10vw] md:px-[5vw] mt-10 mb-20">
            {children}
        </div>
    );
}