import axios from "axios";

interface Data{
  id: number,
  title: string,
}

export async function getEdgePosts(): Promise<Data[]> {
  try {
    const res = await axios.get<Data[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const responseData = res.data;

    if (responseData.length === 0) return [];

    if (responseData.length === 1) {
      return [
        { id: responseData[0].id, title: responseData[0].title },
        { id: responseData[0].id, title: responseData[0].title }
      ];
    }

    const firstData = responseData[0];
    const lastData = responseData[responseData.length - 1];

    return [
      { id: firstData.id, title: firstData.title },
      { id: lastData.id, title: lastData.title }
    ];
  } catch (error) {
    throw error;
  }
}