import Categories from "@/components/Category";
import { type Category } from "./components/Link";
import { Button } from "./components/ui/button";
import { PlusIcon } from "lucide-react";

const categories: Category[] = [
    {
        name: "Social Media",
        links: [
            {
                name: "facebook",
                url: "https://facebook.com",
                icon: "",
            },
            {
                name: "Twitter",
                url: "https://x.com",
                icon: "",
            },
        ],
    },
    {
        name: "Development",
        links: [
            {
                name: "GitHub",
                url: "https://github.com",
                icon: "",
            },
        ],
    },
];

function App() {
    return (
        <section className="p-2 space-y-4">
            {categories.map((cat, i) => (
                <Categories key={i} name={cat.name} links={cat.links} />
            ))}
            <Button>
                <PlusIcon /> New Category
            </Button>
        </section>
    );
}

export default App;
