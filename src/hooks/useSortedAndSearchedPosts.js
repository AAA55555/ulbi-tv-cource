import {ref, computed} from 'vue';

export default function useSortedAndSearchedPosts(sortedPosts) {
    const searchQuery = ref('')

    const sortedAndSearchPosts = computed(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
    })

    return {
        sortedAndSearchPosts, searchQuery
    }
}