import fs from 'fs-extra';
import path from 'path';

interface HeroSection {
  heading: string;
  subheading: string;
  phone: string;
  whatsapp: string;
  image: string;
  cardTitle: string;
  cardDescription: string;
}

/**
 * Reads and automatically parses the hero section configuration from a JSON file
 * @returns Promise with the parsed hero section data or null if error occurs
 */
export async function readHeroSection(): Promise<HeroSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'content', 'home', 'hero_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading hero section:", error);
    return null;
  }
}
