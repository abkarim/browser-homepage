import Categories from "@/components/Category";
import { Button } from "./components/ui/button";
import { PlusIcon } from "lucide-react";
import { useAppSelector } from "./hook/redux";

function App() {
    const categories = useAppSelector((state) => state.categories);

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
            <Button>
                <PlusIcon /> New Category
            </Button>
        </section>
    );
}

export default App;
