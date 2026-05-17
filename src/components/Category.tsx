import { ArrowDown, ArrowUp, PlusIcon } from "lucide-react";
import Item from "./Item";
import { Category } from "./Link";
import { Button } from "./ui/button";
import {
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { useAppDispatch } from "@/hook/redux";
import { addLink } from "@/categoriesSlice";

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
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [n, setN] = useState("");
    const [url, setUrl] = useState("");
    const dispatch = useAppDispatch();

    function add() {
        dispatch(
            addLink({
                categoryId: id,
                name: n,
                url,
            }),
        );
        setN("");
        setUrl("");
        setIsEditOpen(false);
    }

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
            <div className="flex items-stretch gap-4">
                {links.map((l) => (
                    <Item key={l.id} categoryId={id} {...l} />
                ))}
                <Popover open={isEditOpen} onOpenChange={setIsEditOpen}>
                    <PopoverTrigger className="flex flex-col items-center justify-center gap-3 text-xs border border-primary/30 rounded min-w-20 p-2">
                        <PlusIcon size={20} />
                        Add new
                    </PopoverTrigger>
                    <PopoverContent className=" max-w-fit">
                        <PopoverHeader>
                            <PopoverTitle>Add new link in {name}</PopoverTitle>
                        </PopoverHeader>
                        <section className="space-y-2">
                            <Label>Name</Label>
                            <Input
                                value={n}
                                onInput={(e) => setN(e.currentTarget.value)}
                                placeholder="name"
                            />
                            <Label>URL</Label>
                            <Input
                                type="url"
                                value={url}
                                onInput={(e) => setUrl(e.currentTarget.value)}
                                placeholder="url"
                            />
                        </section>
                        <section className="space-x-2">
                            <Button onClick={add}>Add</Button>
                        </section>
                    </PopoverContent>
                </Popover>
            </div>
        </section>
    );
}
