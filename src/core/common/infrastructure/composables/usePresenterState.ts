import type {Ploc} from '~/src/core/common/presenters/Ploc'
import type {DeepReadonly} from 'vue'

export function usePresenterState<S>(ploc: Ploc<S>): DeepReadonly<Ref<S>> {
    const state = ref(ploc.state) as Ref<S>

    const stateSubscription = (newState: S) => {
        state.value = newState
    }

    onMounted(() => {
        ploc.subscribe(stateSubscription)
    })

    onUnmounted(() => {
        ploc.unsubscribe(stateSubscription)
    })

    return readonly(state)
}