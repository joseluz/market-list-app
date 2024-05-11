import { ListItem } from "./ListItem";

export class Section implements ListItem {
    key: string | null = null;
    name: string | null = null;
    isCompleted: boolean = false;

    constructor(init?:Partial<Section>) {
        Object.assign(this, init);
    }
}

