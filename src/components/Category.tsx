import { ArrowDown, ArrowUp, PlusIcon } from "lucide-react";
import Item from "./Item";
import { Category } from "./Link";
import { Button } from "./ui/button";

export default function Categories({
    name,
    links,
}: Category): React.JSX.Element {
    return (
        <section>
            <div className="flex items-center justify-between gap-2">
                <h5 className="text-lg">{name}</h5>
                <div className="flex flex-col">
                    <Button className="[&_svg]:w-3!">
                        <ArrowUp />
                    </Button>
                    <Button className="[&_svg]:w-3!">
                        <ArrowDown />
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-2">
                {links.map((l, i) => (
                    <Item key={i} icon={l.icon} name={l.name} url={l.url} />
                ))}
                <Button>
                    <PlusIcon />
                    Add new Link
                </Button>
            </div>
        </section>
    );
}
