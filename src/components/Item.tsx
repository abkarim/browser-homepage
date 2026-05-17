import { getFavIconImageUrl } from "@/lib/faviconExtractor";
import { type Link } from "./Link";
import {
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "./ui/popover";
import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { deleteLink, updateLink } from "@/categoriesSlice";
import { useAppDispatch } from "@/hook/redux";

interface Props extends Link {
    categoryId: string;
}

export default function Item({
    name,
    url,
    icon,
    id,
    openCount,
    categoryId,
}: Props): React.JSX.Element {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [n, setN] = useState(name);
    const [u, setU] = useState(url);
    const dispatch = useAppDispatch();

    function saveChanges() {
        dispatch(
            updateLink({
                categoryId,
                link: {
                    name: n,
                    url: u,
                    icon,
                    id,
                    openCount,
                },
            }),
        );
        setIsEditOpen(false);
    }

    return (
        <div className="relative">
            <div className="absolute top-1 right-0">
                <Popover open={isEditOpen} onOpenChange={setIsEditOpen}>
                    <PopoverTrigger className="opacity-65">
                        <MoreVertical />
                    </PopoverTrigger>
                    <PopoverContent className=" max-w-fit">
                        <PopoverHeader>
                            <PopoverTitle>Edit Link</PopoverTitle>
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
                                value={u}
                                onInput={(e) => setU(e.currentTarget.value)}
                                placeholder="url"
                            />
                        </section>
                        <section className="space-x-2">
                            <Button onClick={saveChanges}>Save</Button>
                            <Button
                                variant="destructive"
                                onClick={() =>
                                    dispatch(
                                        deleteLink({
                                            categoryId,
                                            linkId: id,
                                        }),
                                    )
                                }
                            >
                                Delete
                            </Button>
                        </section>
                    </PopoverContent>
                </Popover>
            </div>
            <a
                href={url}
                className="flex flex-col items-center text-sm gap-2 border border-primary/30 rounded min-w-20 p-2"
            >
                <div className="rounded-full bg-primary/50 h-10 w-10 flex items-center justify-center">
                    <img
                        className="h-full w-full rounded-full p-1"
                        src={getFavIconImageUrl(url)}
                        alt={name}
                    />
                </div>
                {name}
            </a>
        </div>
    );
}
