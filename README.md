# ProjectHub

ProjectHub is a static catalogue and enquiry website for practical software projects, custom websites and full-stack applications for students.

## Run locally

No build step or server-side runtime is required. Open `index.html` directly in a browser, or serve this folder with any static file server. For example, VS Code Live Server works well.

## Configure contact details

Edit [`js/config.js`](./js/config.js) and replace:

- `whatsappNumber` with the public WhatsApp number, including country code and no spaces
- `email` with the enquiry email
- `instagram` with the Instagram profile URL
- `website` with the real canonical website URL

The contact details are used by the shared navigation/footer and WhatsApp links.

## Manage projects

All catalogue data lives in [`js/projects.js`](./js/projects.js).

- **Add a project:** copy an object in the `PROJECTS` array, give it a unique `id`, and add its image under `assets/projects/`.
- **Remove a project:** remove its object from the array.
- **Change a price:** edit the `price` number (INR).
- **Change the image:** edit the `image` path or replace the referenced SVG with your own WebP/AVIF/SVG asset.
- **Change technologies, features or description:** edit the corresponding arrays or text in the object.
- **Mark featured:** set `featured: true`.

Cards, filters, detail pages and product structured data render automatically from this file.

## Deployment

This is plain HTML, CSS and JavaScript:

- **Vercel:** import the folder/repository and use the default static deployment settings.
- **Netlify:** drag the folder into Netlify Drop, or connect the repository with no build command and the project folder as publish directory.
- **GitHub Pages / Cloudflare Pages / cPanel:** upload the files and preserve the folder structure.

## SEO updates

Replace `https://projecthub.studio` in the canonical tags, [`sitemap.xml`](./sitemap.xml), and [`robots.txt`](./robots.txt) after the real domain is known. Update the social preview URL if you host the preview image elsewhere. Page titles and descriptions are in each HTML file.

## Notes

The site intentionally does not include analytics, an account system, a database or online payment processing. Review and customize the legal pages and refund terms with the real business details before accepting enquiries.
