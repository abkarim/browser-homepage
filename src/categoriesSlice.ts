import { Category, Link } from "@/components/Link";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { loadState } from "./lib/storage";
import { getFavIconImageUrl } from "./lib/faviconExtractor";

const initialState: Category[] = [
    {
        id: "asdfasdf",
        name: "Social Media",
        links: [
            {
                id: "asdfasdfasadfasdasdfsf",
                name: "Facebook",
                url: "https://facebook.com",
                icon: "",
                openCount: 0,
            },
            {
                id: "asdfasdfasadfasdf",
                name: "Twitter",
                url: "https://x.com",
                icon: "",
                openCount: 0,
            },
        ],
    },
    {
        id: "asdfasdfsadf",
        name: "Development",
        links: [
            {
                id: "asdfasdfasdfasdf",
                name: "GitHub",
                url: "https://github.com",
                icon: "",
                openCount: 0,
            },
        ],
    },
];

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: loadState() || initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<Category["name"]>) => {
            state.push({
                id: uuidv4(),
                name: action.payload,
                links: [],
            });
        },
        addLink: (
            state,
            action: PayloadAction<{
                name: Link["name"];
                url: Link["url"];
                categoryId: Category["id"];
            }>,
        ) => {
            const { name, url, categoryId } = action.payload;

            const category = state.find((cat) => cat.id === categoryId);

            if (category) {
                const link: Link = {
                    id: uuidv4(),
                    name,
                    url,
                    openCount: 0,
                    icon: getFavIconImageUrl(url),
                };

                category.links.push(link);
            }
        },
        updateLink: (
            state,
            action: PayloadAction<{ link: Link; categoryId: Category["id"] }>,
        ) => {
            const { categoryId, link } = action.payload;
            const category = state.find((cat) => cat.id === categoryId);

            if (category) {
                const linkIndex = category.links.findIndex(
                    (l) => l.id === link.id,
                );

                if (linkIndex !== -1) {
                    category.links[linkIndex] = link;
                }
            }
        },
        deleteLink: (
            state,
            action: PayloadAction<{
                categoryId: Category["id"];
                linkId: Link["id"];
            }>,
        ) => {
            const { categoryId, linkId } = action.payload;

            const category = state.find((cat) => cat.id === categoryId);

            if (category) {
                const linkIndex = category.links.findIndex(
                    (l) => l.id === linkId,
                );

                if (linkIndex !== -1) {
                    category.links.splice(linkIndex, 1);
                }
            }
        },
        incrementClickCount: (
            state,
            action: PayloadAction<{
                categoryId: Category["id"];
                linkId: Link["id"];
            }>,
        ) => {
            const { categoryId, linkId } = action.payload;
            const category = state.find((cat) => cat.id === categoryId);

            if (category) {
                const linkIndex = category.links.findIndex(
                    (l) => l.id === linkId,
                );

                if (linkIndex !== -1) {
                    category.links[linkIndex].openCount += 1;
                }
            }
        },
    },
});

export const {
    updateLink,
    deleteLink,
    incrementClickCount,
    addLink,
    addCategory,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
