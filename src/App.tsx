import Categories from "@/components/Category";
import { Button } from "./components/ui/button";
import { PlusIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "./hook/redux";
import {
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "./components/ui/popover";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { addCategory } from "./categoriesSlice";

function App() {
    const categories = useAppSelector((state) => state.categories);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [name, setName] = useState("");
    const dispatch = useAppDispatch();

    function add() {
        dispatch(addCategory(name));
        setName("");
        setIsEditOpen(false);
    }
    return (
        <section className="p-2 space-y-5">
            {categories.map(({ id, links, name }, i) => (
                <Categories
                    key={id}
                    id={id}
                    canGoUp={i !== 0}
                    canGoDown={i + 1 < categories.length}
                    name={name}
                    links={links}
                />
            ))}
            <Popover open={isEditOpen} onOpenChange={setIsEditOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        <PlusIcon /> New Category
                    </Button>
                </PopoverTrigger>
                <PopoverContent className=" max-w-fit">
                    <PopoverHeader>
                        <PopoverTitle>Add new category</PopoverTitle>
                    </PopoverHeader>
                    <section className="space-y-2">
                        <Label>Name</Label>
                        <Input
                            value={name}
                            onInput={(e) => setName(e.currentTarget.value)}
                            placeholder="name"
                        />
                    </section>
                    <section className="space-x-2">
                        <Button onClick={add}>Add</Button>
                    </section>
                </PopoverContent>
            </Popover>
        </section>
    );
}

export default App;
