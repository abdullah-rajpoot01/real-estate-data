import fs from 'fs-extra';
import path from 'path';

interface HeroSection {
  heading: string;
  subheading: string;
  badge:string;
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
  const filePath = path.join(process.cwd(), 'data', 'home', 'hero_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading hero section:", error);
    return null;
  }
}



interface PracticeArea {
  title: string;
  description: string;
  link: string;
}

interface PracticeAreasSection {
  heading: string;
  subheading: string;
  badge: string;
  areas: PracticeArea[];
}

/** 
 * Reads and automatically parses the practice areas section configuration from a JSON file
 * @returns Promise with the parsed practice areas section data or null if error occurs
 */
export async function readPracticeAreasSection(): Promise<PracticeAreasSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'practice_areas_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading practice areas section:", error);
    return null;
  }
}


interface Stat {
  label: string;
  value: string;
}

interface Cta {
  label: string;
  link: string;
}

interface AboutSection {
  heading: string;
  subheading: string;
  badge: string;
  description: string;
  stats: Stat[];
  cta: Cta;
  highlights: string[];
}

/** 
 * Reads and automatically parses the about section configuration from a JSON file
 * @returns Promise with the parsed about section data or null if error occurs
 */
export async function readAboutSection(): Promise<AboutSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'about_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading about section:", error);
    return null;
  }
}