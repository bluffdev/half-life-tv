import { ref } from 'vue'
import { IState, ITeam } from '../interfaces/types';

export async function useFetch(url: string) {
    const state = ref<IState>({
        response: [],
    })

    async function fetchData() {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const json = await response.json() 
            state.value.response = <ITeam[]>json
        } catch (err: unknown) {
            console.log(err)
        }
    }

    await fetchData()
    
    return { state }
}