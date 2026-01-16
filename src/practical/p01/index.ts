import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

interface Data{
  id: number,
  title: string,
}

let dataObject: Data[];

export async function loadData() {
  try{
    const res = await axios.get(API_ENDPOINT);
    const responseData = res.data as Data[];
    return dataObject = [...responseData].sort((a,b) => a.id - b.id);
  }catch{
    throw new Error("Failed");
  }
}

export function getEdgePosts(){
  const firstElement: string = dataObject[0];
  const lastElement: string = dataObject[dataObject.length - 1];

}

getEdgePosts();