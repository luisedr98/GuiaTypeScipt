import powersArr from "../data/powers";
import { Power } from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
    public powers: Power[] = [...powersArr]
  ) {}

  get power() {
    return (
      this.powers.find((power) => power.id === this.powerId)?.desc ||
      "not found"
    );
  }
}
