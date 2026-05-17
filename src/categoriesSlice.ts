import { Category, Link } from "@/components/Link";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Category[] = [
    {
        id: "asdfasdf",
        name: "Social Media",
        links: [
            {
                id: "asdfasdfasadfasdasdfsf",
                name: "facebook",
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
    initialState,
    reducers: {
        updateLink: (
            state,
            action: PayloadAction<{ link: Link; categoryId: Category["id"] }>,
        ) => {
            console.log(action.payload);
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
    },
});

export const { updateLink, deleteLink } = categoriesSlice.actions;
export default categoriesSlice.reducer;
