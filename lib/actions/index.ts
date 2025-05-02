"use server";

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(url: string) {
  if (!url) return;
  try {
    const scrapedProduct = await scrapeAmazonProduct(url);
  } catch (error: any) {
    throw new Error(`Failed to scrape and store product: ${error.message}`);
  }
}
