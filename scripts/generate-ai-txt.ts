import { siteContent } from '../src/data/siteContent';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function stripHtml(text: string): string {
    return text.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
}

function generateMarkdown() {
    const { hero, services, about, contact, faq, brandName } = siteContent;

    let md = `# ${brandName}\n\n`;

    // Hero
    md += `## ${stripHtml(hero.title)}\n`;
    md += `${stripHtml(hero.subtitle)}\n\n`;

    // Services
    md += `## ${stripHtml(services.title)}\n`;
    md += `${stripHtml(services.subtitle)}\n\n`;

    md += `### ${stripHtml(services.problemSolution.problem.title)}\n`;
    md += `${stripHtml(services.problemSolution.problem.description)}\n\n`;

    md += `### ${stripHtml(services.problemSolution.missingPiece.title)}\n`;
    md += `${stripHtml(services.problemSolution.missingPiece.description)}\n\n`;

    md += `### ${stripHtml(services.problemSolution.solution.title)}\n`;
    md += `${stripHtml(services.problemSolution.solution.description)}\n\n`;

    md += `### Key Services\n`;
    services.items.forEach(service => {
        md += `#### ${stripHtml(service.title)}\n`;
        md += `${stripHtml(service.description)}\n`;
        service.details.forEach(detail => {
            md += `${stripHtml(detail)}\n`;
        });
        md += `\n`;
    });

    // About
    md += `## ${stripHtml(about.title)}\n`;
    about.features.forEach(feature => {
        md += `### ${stripHtml(feature.title)}\n`;
        md += `${stripHtml(feature.description)}\n\n`;
    });

    // FAQ
    md += `## ${stripHtml(faq.title)}\n`;
    faq.items.forEach(item => {
        md += `### ${stripHtml(item.question)}\n`;
        md += `${stripHtml(item.answer)}\n\n`;
    });

    // Contact
    md += `## ${stripHtml(contact.header.title)}\n`;
    md += `${stripHtml(contact.header.subtitle)}\n\n`;

    md += `### ${stripHtml(contact.whyMe.title)}\n`;
    contact.whyMe.points.forEach(point => {
        md += `- ${stripHtml(point)}\n`;
    });

    return md;
}

const outputPath = path.join(__dirname, '../public/ai.txt');
const markdown = generateMarkdown();

if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

fs.writeFileSync(outputPath, markdown);
console.log(`Successfully generated ${outputPath}`);

