# Public Assets — Organization Guide

This directory stores static assets served by the application. Use the following structure to keep media organized.

## Folder Structure

```
public/
├── events/                    # Event-specific media
│   ├── ai-summit-2026/        # AI Summit 2026
│   │   ├── images/            # Event photos, banners, speaker images
│   │   └── videos/            # Event recordings, trailers
│   ├── summit-2025/
│   │   ├── images/
│   │   └── videos/
│   ├── summit-2024/
│   │   ├── images/
│   │   └── videos/
│   └── summit-2023/
│       ├── images/
│       └── videos/
├── team/                      # Team member headshots and photos
├── advisors/                  # Board of Directors (BOD) and advisor photos
├── images/                    # General site images (logos, illustrations)
└── [root]                     # Favicons, app icons (icon.svg, etc.)
```

## Usage in Code

Reference assets by path from the public root, e.g.:

- `/events/ai-summit-2026/images/hero-banner.jpg`
- `/events/summit-2025/videos/recap.mp4`
- `/team/member-name.jpg`
- `/advisors/advisor-initials.jpg`
- `/images/logo.png`
