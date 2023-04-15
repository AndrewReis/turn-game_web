import type { Character } from '@/fakes/models';
import { computed, ref, type Ref } from 'vue';

type Config = {
  page: Ref<number>;
  perPage?: number;
};

export function usePagination(list: Ref<Character[]>, config: Config) {
  const perPage = ref(config.perPage || 5);
  const currentIndex = ref(config.page.value - 1);

  const currentPage = computed(() => currentIndex.value + 1);
  const numberOfPages = computed(() =>
    Math.ceil(Math.ceil(list.value.length || 0) / perPage.value)
  );
  const paginatedList = computed(() =>
    list.value.slice(currentIndex.value * perPage.value, (currentIndex.value + 1) * perPage.value)
  );

  const goToNext = () => {
    currentIndex.value = Math.min(currentIndex.value + 1, numberOfPages.value - 1);
  };

  const goToPrev = () => {
    currentIndex.value = Math.max(0, currentIndex.value - 1);
  };

  const gotoFirst = () => {
    currentIndex.value = 0;
  };

  const gotoLast = () => {
    currentIndex.value = numberOfPages.value - 1;
  };

  return {
    paginatedList,
    numberOfPages,
    currentPage,
    goToNext,
    gotoFirst,
    goToPrev,
    gotoLast
  };
}
