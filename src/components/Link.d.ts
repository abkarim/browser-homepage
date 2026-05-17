export interface Link {
    id: string;
    name: string;
    url: string;
    icon: string;
    openCount: number;
}

export interface Category {
    id: string;
    name: string;
    links: Link[];
}
