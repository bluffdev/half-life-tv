import { ref, UnwrapRef } from 'vue'
import { IState } from '../interfaces/types';

export async function useFetch<T>(url: string) {
    const state = ref<IState<T>>({
        response: <T>{}
    })

    async function fetchData() {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const json = await response.json() 
            state.value.response = <UnwrapRef<T>>json
        } catch (err: unknown) {
            console.log(err)
        }
    }

    await fetchData()
    
    return { state }
}