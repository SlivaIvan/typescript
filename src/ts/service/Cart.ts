import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    calculateTotalAmount(): number {
        return this._items.reduce((sum, current) => sum + current.price, 0);
    }

    calculateBonus(bonus: number): number {
        let totalAmount = this.calculateTotalAmount();
        return totalAmount - totalAmount * bonus;
    }

    delete(id: number): void {
        let itemIndex = this._items.findIndex(item => item.id == id);
        if ( itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
        }
    }
}