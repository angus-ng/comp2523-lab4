export interface ISortable {
    get length(): number;
    compare(leftPos: number, rightPos: number): boolean;
    swap(leftPos: number, rightPos: number): void;
}