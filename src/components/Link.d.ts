export interface Link {
    name: string;
    url: string;
    icon: string;
}

export interface Category {
    name: string;
    links: Link[];
}
