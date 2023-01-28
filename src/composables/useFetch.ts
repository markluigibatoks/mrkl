import axios from "axios";
import { ref } from "vue";

export async function useFetch({
  url,
  params,
  timeout = 0,
}: {
  url: string;
  params?: any;
  timeout?: number;
}) {
  const isFetching = ref<boolean>(true);
  const data = ref<any | null>(null);
  const error = ref<any | null>(null);
  const controller = new AbortController();

  try {
    const response = await axios.get(url, {
      params,
      timeout,
      signal: controller.signal,
    });

    if (!(response.status === 200)) {
      error.value = response;
    }

    data.value = response.data;
    isFetching.value = false;
  } catch (err: any) {
    error.value = err;
  }

  return {
    data,
    error,
    controller,
    isFetching,
  };
}
