import algoliasearch from "algoliasearch/lite";
export const searchClient: Object = algoliasearch(`${process.env.NEXT_PUBLIC_APP_ID}`, `${process.env.NEXT_PUBLIC_API_KEY}`);