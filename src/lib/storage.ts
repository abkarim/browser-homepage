import { Category } from "@/components/Link";

const STORAGE_KEY = "app_state";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if (serializedState === null) {
            return undefined; // Let Redux use its default initialState
        }
        return JSON.parse(serializedState) as Category[];
    } catch (err) {
        console.error("Could not load state", err);
        return undefined;
    }
};

export const saveState = (state: Category[]) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STORAGE_KEY, serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
};
