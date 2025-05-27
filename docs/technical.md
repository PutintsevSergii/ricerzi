# Technical Documentation

## Project Overview
This is a Next.js-based multilingual website for the Knights of John Paul II community. The project uses modern web technologies and follows best practices for internationalization, content management, and performance.

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content Management**: Decap CMS (formerly Netlify CMS)
- **Content Format**: Markdown with YAML frontmatter
- **Image Optimization**: Next.js Image component
- **State Management**: React Hooks
- **Build Tools**: Webpack (via Next.js)

## Project Structure
```
src/
├── app/                    # Next.js app directory
│   ├── [lang]/            # Dynamic language routes
│   │   ├── about/         # About page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── admin/             # Decap CMS admin interface
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components
├── content/              # Content files
│   └── pages/            # Page content in markdown
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Routing System
The application uses Next.js App Router with dynamic language routing:

- `/[lang]/*` - All routes are prefixed with the language code
- Supported languages: 'lv' (Latvian), 'pl' (Polish), 'en' (English), 'ua' (Ukrainian)
- Default language: 'lv' (Latvian)

### Route Structure
- `/` - Redirects to default language
- `/[lang]` - Home page
- `/[lang]/about` - About page
- `/admin` - Decap CMS admin interface

## Content Management

### Content Structure
Content is stored in Markdown files with YAML frontmatter:

```markdown
---
layout: about
title: "Page Title"
heroTitle: "Hero Title"
heroDescription: "Hero description text"
# ... other frontmatter fields
---
```

### Content Loading
The project uses a static import approach for content loading:

1. **Static Import**
   - Markdown files are imported directly in the `useContent` hook
   - Content is bundled at build time
   - No runtime API calls needed

2. **Content Hook Implementation**
   ```typescript
   // src/hooks/useContent.ts
   import matter from 'gray-matter'
   
   // Import markdown files
   import aboutLv from '../content/pages/about.lv.md'
   import aboutPl from '../content/pages/about.pl.md'
   import aboutEn from '../content/pages/about.en.md'
   import aboutUa from '../content/pages/about.ua.md'
   
   // Map paths to their content
   const contentMap: Record<string, string> = {
     'pages/about.lv': aboutLv,
     'pages/about.pl': aboutPl,
     'pages/about.en': aboutEn,
     'pages/about.ua': aboutUa,
   }
   
   export function useContent(path: string) {
     const content = contentMap[path]
     if (!content) {
       throw new Error(`Content not found for path: ${path}`)
     }
     return matter(content)
   }
   ```

3. **Build Configuration**
   - Webpack is configured to handle markdown files
   - `raw-loader` processes markdown files as strings
   - TypeScript declarations ensure type safety

4. **Benefits**
   - Faster page loads (no API calls)
   - Better SEO (content available at build time)
   - Improved reliability (no network dependencies)
   - Better developer experience (type safety)

## Components

### UI Components
Located in `src/components/ui/`:

1. **Container**
   - Responsive container with max-width
   - Consistent padding and margins
   - Usage: Wraps content sections for consistent layout
   ```tsx
   <Container>
     <YourContent />
   </Container>
   ```

2. **Section**
   - Page section wrapper
   - Configurable background and padding
   - Usage: Creates distinct page sections with consistent spacing
   ```tsx
   <Section className="bg-primary text-white py-20">
     <YourContent />
   </Section>
   ```

3. **Heading**
   - Typography component for headings
   - Supports multiple levels (h1-h6)
   - Configurable styles
   - Usage: Consistent heading styles across the site
   ```tsx
   <Heading level={1} className="text-4xl font-bold">
     Your Heading
   </Heading>
   ```

4. **Text**
   - Typography component for body text
   - Configurable styles and variants
   - Usage: Consistent text styling
   ```tsx
   <Text className="text-lg">
     Your text content
   </Text>
   ```

5. **Image**
   - Next.js Image wrapper
   - Optimized image loading
   - Responsive sizing
   - Usage: Optimized image display
   ```tsx
   <Image
     src="/path/to/image.jpg"
     alt="Description"
     fill
     className="object-cover"
   />
   ```

### About Page Components

The About page (`src/app/[lang]/about/page.tsx`) is composed of several sections, each with specific components and functionality:

1. **Hero Section**
   ```tsx
   <Section className="bg-primary text-white py-20">
     <Container>
       <Heading level={1}>
         {content.heroTitle}
       </Heading>
       <Text>
         {content.heroDescription}
       </Text>
     </Container>
   </Section>
   ```
   - Displays the main title and description
   - Uses primary background color
   - Responsive padding and text sizing

2. **Mission and Values Section**
   ```tsx
   <Section className="py-16">
     <Container>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         <div>
           <Heading level={2}>
             {content.missionTitle}
           </Heading>
           <Text>{content.missionContent}</Text>
           <Heading level={3}>
             {content.valuesTitle}
           </Heading>
           <ul className="space-y-4">
             {content.values.map((value) => (
               <li key={value.title}>
                 <Text>{value.title}</Text>
                 <Text>{value.description}</Text>
               </li>
             ))}
           </ul>
         </div>
         <div className="relative h-[400px]">
           <Image
             src={content.image}
             alt={content.imageAlt}
             fill
             className="object-cover"
           />
         </div>
       </div>
     </Container>
   </Section>
   ```
   - Two-column layout on desktop
   - Mission statement and values list
   - Featured image with aspect ratio
   - Responsive grid layout

3. **History Section**
   ```tsx
   <Section className="bg-gray-50 py-16">
     <Container>
       <Heading level={2}>
         {content.historyTitle}
       </Heading>
       <Text>{content.historyContent}</Text>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {content.milestones.map((milestone) => (
           <div key={milestone.year}>
             <Text>{milestone.year}</Text>
             <Text>{milestone.description}</Text>
           </div>
         ))}
       </div>
     </Container>
   </Section>
   ```
   - Timeline of important events
   - Two-column grid for milestones
   - Light gray background
   - Responsive layout

### Content Structure for About Page

The About page content is defined in markdown files with the following structure:

```markdown
---
layout: about
title: "About Us"
heroTitle: "About Knights of John Paul II"
heroDescription: "Description text"
missionTitle: "Our Mission"
missionContent: "Mission statement"
valuesTitle: "Our Values"
values:
  - title: "Value 1"
    description: "Description 1"
  - title: "Value 2"
    description: "Description 2"
image: "/path/to/image.jpg"
imageAlt: "Image description"
historyTitle: "Our History"
historyContent: "History text"
milestones:
  - year: "2020"
    description: "Event description"
  - year: "2021"
    description: "Event description"
---
```

### Component Data Flow

1. **Content Loading**
   - `useContent` hook loads markdown file based on language
   - `gray-matter` parses frontmatter into structured data
   - Content is passed to page components

2. **Rendering Process**
   - Page component receives content data
   - Layout components create structure
   - UI components render content
   - Responsive design adapts to screen size

3. **Internationalization**
   - Language parameter determines content file
   - Components use language-specific content
   - Layout adjusts for different text lengths

4. **Performance Optimization**
   - Static content generation
   - Optimized image loading
   - Responsive image sizing
   - Efficient component rendering

## Internationalization

### Language Configuration
- Language codes: 'lv', 'pl', 'en', 'ua'
- Default language: 'lv'
- Language detection in middleware
- Language-specific metadata

### Content Translation
- Separate markdown files for each language
- Consistent frontmatter structure
- Language-specific routes

## Decap CMS Integration

### Configuration
Located in `public/admin/config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

collections:
  - name: "pages"
    label: "Pages"
    files:
      - file: "src/content/pages/home.lv.md"
        label: "Home (LV)"
        name: "home-lv"
        fields:
          # ... field definitions
```

### Admin Interface
- Accessible at `/admin`
- Git-based content management
- Preview support
- Media library

## Build and Deployment

### Build Process
1. Next.js static site generation
2. Markdown content processing
3. Image optimization
4. Type checking

### Configuration Files
1. **next.config.js**
   - Webpack configuration for markdown
   - Image optimization settings
   - Environment variables

2. **tsconfig.json**
   - TypeScript configuration
   - Path aliases
   - Strict type checking

## Performance Optimization

### Image Optimization
- Next.js Image component
- Automatic responsive images
- Lazy loading
- WebP format support

### Content Loading
- Static content at build time
- No client-side fetching
- Optimized bundle size

### Caching
- Static page generation
- Browser caching
- CDN support

## Development Guidelines

### Code Style
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Component-based architecture

### Best Practices
1. Use TypeScript for type safety
2. Follow component composition
3. Implement responsive design
4. Optimize for performance
5. Maintain consistent naming
6. Document complex logic

## Testing
- Component testing
- Integration testing
- E2E testing
- Performance testing

## Deployment
- Static site hosting
- CDN integration
- Environment configuration
- CI/CD pipeline

## Security
- Content Security Policy
- XSS protection
- CSRF protection
- Secure headers

## Monitoring
- Error tracking
- Performance monitoring
- Analytics integration
- Uptime monitoring 