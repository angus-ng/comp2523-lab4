import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
    private _data : string;

    constructor (str: string) {
        this._data = str;
    }

    get length(): number {
        return this._data.length;
    }
    compare(leftPos: number, rightPos: number): boolean {
        return this._data[leftPos].toLowerCase() > this._data[rightPos].toLowerCase();
    }
    swap(leftPos: number, rightPos: number): void {
        const stringArr = this._data.split("");
        let tempLeft = this._data[leftPos];
        stringArr[leftPos] = stringArr[rightPos];
        stringArr[rightPos] = tempLeft;
    }

}