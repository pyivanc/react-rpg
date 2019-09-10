import Entity from './Entity'

export default class Clock {
    entities: Entity[] = []

    subscribe(ent: Entity) {
        this.entities.push(ent)
    }

    tick() {
        this.entities.forEach(ent => ent.update())
    }
}