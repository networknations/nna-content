# Network Nations Alliance — Content

Public content for the [Network Nations Alliance](https://networknations.network) website and knowledge garden.

## Structure

```
garden/          Knowledge Garden pages (Quartz)
  concepts/      Theoretical foundations
  constitution/  Alliance constitution
  organizations/ Network nation organizations
  podcast/       Podcast episode notes
  reading/       Recommended reading
website/         Website content (Eleventy)
  essay.md       Long-form essay
  index_*.md     Homepage section content
docs/            Reference documents
```

## Contributing

We welcome contributions to the knowledge garden and website content.

### How to contribute

1. **Fork** this repository
2. **Edit or add** markdown files in `garden/` or `website/`
3. **Submit a pull request** with a description of your changes

### Content guidelines

- All content is written in **Markdown** with YAML frontmatter
- Garden pages use `title`, `tags`, and `description` in frontmatter
- Website content files use structured YAML for data (members, podcasts, papers, etc.)
- Follow the existing file naming conventions
- Keep language clear and accessible

### Garden content

The `garden/` directory powers the [Knowledge Garden](https://garden.networknations.network) — a living collection of concepts, governance structures, and research related to network nations.

To add a new concept page, create a file in `garden/concepts/` with this format:

```markdown
---
title: Your Concept Title
tags:
  - governance
  - relevant-tag
---

Your content here...
```

### Website content

The `website/` directory contains homepage section content. Each `index_*.md` file maps to a section of the homepage. Edit these to update text, add members, podcasts, papers, etc.

## License

Content is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
