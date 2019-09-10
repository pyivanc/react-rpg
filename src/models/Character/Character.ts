import Statistic from './Statistic'
import Entity from '../World/Entity'

const emptyStat = new Statistic(0)


export default class Character implements Entity {

    constructor(
        public name: string,
        public strength: Statistic = emptyStat,
        public speed: Statistic = emptyStat,
        public vitality: Statistic = emptyStat) {
    }

    update(): void {
        console.log(`Updating ${this.name}`)
    }

}