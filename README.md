# MB Metallic Bellows — Website

Modern, high-performance static website for **MB Metallic Bellows Private Limited** (Oragadam, Chennai, India).

- **Production URL**: [https://mb-metallics.vercel.app](https://mb-metallics.vercel.app)
- **Framework & Architecture**: Next.js static export with Framer Motion reveals, Lenis smooth scrolling, and full CSS keyframe animations.
- **Standards & Approvals**: ISO 9001:2015 (DNV), ASME U-Stamp, PED 2014/68/EU, and IBR.

---

## Pages & Structure
- `index.html` (`/`): Home page with hero expansion, company overview, capabilities, product carousel, and client reach.
- `projects.html` (`/projects`): Full product and solution catalog (Universal, Gimbal, Tied Lateral, Pressure Balanced, Large-Bore up to 9000 mm, Rectangular & Fabric expansion joints).
- `studio.html` (`/studio`): About MB Metallic Bellows, engineering standards (EJMA 10th ed.), QA, and manufacturing shop in Chennai.
- `contact.html` (`/contact`): Inquiry form, works address, email, and phone contact.
- `projects/`: Dedicated individual pages for each expansion joint solution.

---

## Run Locally
To preview locally:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## Deploy to Vercel
Deploy directly via Vercel CLI:
```bash
npx vercel --prod
```
Configuration is managed in `vercel.json` with clean URLs and immutable static asset caching.
