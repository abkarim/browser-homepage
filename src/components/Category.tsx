import { ArrowDown, ArrowUp, PlusIcon } from "lucide-react";
import Item from "./Item";
import { Category } from "./Link";
import { Button } from "./ui/button";

interface Props extends Category {
    canGoUp: boolean;
    canGoDown: boolean;
}

export default function Categories({
    name,
    links,
    canGoDown,
    canGoUp,
    id,
}: Props): React.JSX.Element {
    return (
        <section>
            <div className="flex items-center justify-between gap-2">
                <h5 className="text-md">{name}</h5>
                <div className="flex flex-col">
                    <Button disabled={!canGoUp} className="[&_svg]:w-3!">
                        <ArrowUp />
                    </Button>
                    <Button disabled={!canGoDown} className="[&_svg]:w-3!">
                        <ArrowDown />
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {links.map((l) => (
                    <Item key={l.id} categoryId={id} {...l} />
                ))}
                <Button>
                    <PlusIcon />
                    Add new Link
                </Button>
            </div>
        </section>
    );
}
