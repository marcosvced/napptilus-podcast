type Listener<S> = (state: S) => void

interface Observer {
    listeners: Listener<any>[]

    subscribe(listener: Listener<any>): void

    unsubscribe(listener: Listener<any>): void
}

export abstract class Ploc<S> implements Observer {
    listeners: Listener<S>[] = []

    protected constructor(private internalState?: S) {
    }

    get state(): S {
        return (this.internalState ?? {}) as S
    }

    updateState(state: S) {
        this.internalState = state

        if (0 < this.listeners.length) {
            this.listeners.forEach(listener => listener(this.state))
        }
    }

    subscribe(listener: Listener<S>) {
        this.listeners.push(listener)
    }

    unsubscribe(listener: Listener<S>) {
        const index = this.listeners.indexOf(listener)
        if (-1 < index) {
            this.listeners.splice(index, 1)
        }
    }
}