import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable{
    private _data: number[];

    constructor (numGrp : number[]) {
        this._data = numGrp;
    }

    get data(): number[] {
        return this._data;
    }

    get length(): number {
        return this._data.length;
    }

    compare(leftPos: number, rightPos: number): boolean {
        return this._data[leftPos] > this._data[rightPos];
    }

    swap(leftPos: number, rightPos: number): void {
        let tempLeft = this._data[leftPos];
        this._data[leftPos] = this._data[rightPos];
        this._data[rightPos] = tempLeft;
    }
}