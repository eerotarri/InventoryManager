import CollapsibleWrapper from "./_components/collapsible-component";

export default async function Heavy() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center px-3 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <CollapsibleWrapper />
            </main>
        </div>
    );
}
