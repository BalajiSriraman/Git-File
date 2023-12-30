"use server";

// Import your JSON data or fetch it from an API
import jsonData from "./data.json";

export type Item = {
  name: string;
  type: string;
  children?: Item[];
};

const jsonDataAny: Item[] = jsonData;

export async function fetchData() {
  // Simulate an API call or use an actual fetch here
  // For example: const response = await fetch('https://api.example.com/data');
  // const data = await response.json();
  const data = jsonDataAny;

  return data;
}
