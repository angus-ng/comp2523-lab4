import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
    get length(): number {
        throw new Error("Method not implemented.");
    }
    compare(leftPos: number, rightPos: number): boolean {
        throw new Error("Method not implemented.");
    }
    swap(leftPos: number, rightPos: number): void {
        throw new Error("Method not implemented.");
    }

}