# Robox

## 📋 Table of Contents
- [Technical Architecture](#technical-architecture)
- [Ad Configuration System](#ad-configuration-system)
- [Content Management](#content-management)
- [Page Structure & Routes](#page-structure--routes)
- [Development Setup](#development-setup)
- [Deployment](#deployment)

## 🏗️ Technical Architecture

### Tech Stack
- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS 4.0
- **Routing**: React Router DOM v7
- **State Management**: React Context API
- **Ad Integration**: Google Publisher Tag (GPT)
- **Build Tool**: Vite with SWC

### Project Structure
```
src/
├── Components/          # Reusable UI components
├── Pages/              # Route-based page components
├── Router/             # React Router configuration
├── utils/              # Utilities (ads, points, constants)
├── assets/             # Images and SVGs
└── styles/             # CSS modules
```

## 📺 Ad Configuration System

The ad system is centrally managed through `src/utils/AdConfig.json`. This configuration file controls all ad placements, formats, and targeting across the application.

### Global Ad Settings

```json
{
  "showRewardedPopup": false,    // Controls popup display before rewarded ads
  "showQuizAdAtTop": true        // Controls ad position on quiz page
}
```

### Page-Specific Ad Configurations

#### 1. **HOME_AD** - Home Page
- **Component**: `src/Components/HomeComponent.jsx`
- **Route**: `/home`
- **Ad Slots**:
  - `BANNER_SLOT_1`: Top banner ad
  - `BANNER_SLOT_2`: Middle content banner ad
  - `BANNER_SLOT_3`: Bottom content banner ad
  - `ANCHOR_SLOT_1`: Bottom anchor ad

#### 2. **QUIZ_AD** - Quiz Page
- **Component**: `src/Pages/QuizPage.jsx`
- **Route**: `/daily-news`
- **Ad Slots**:
  - `BANNER_SLOT_1`: Banner ad
  - `ANCHOR_SLOT_1`: Bottom anchor ad

#### 3. **SPIN_AD** - Spin Wheel Page
- **Component**: `src/Pages/SpinWheel.jsx`
- **Route**: `/spin-wheel`
- **Ad Slots**:
  - `BANNER_SLOT_1`: Banner ad
  - `ANCHOR_SLOT_1`: Bottom anchor ad
  - `REWARD_SLOT_1`: Rewarded ad for game rewards

#### 4. **SCRATCH_AD** - Scratch Card Pages
- **Component**: `src/Pages/ScratchCard.jsx`
- **Routes**: `/scratch-card`, `/lucky-scratch`
- **Ad Slots**:
  - `BANNER_SLOT_1`: Banner ad
  - `ANCHOR_SLOT_1`: Bottom anchor ad
  - `REWARD_SLOT_1`: Rewarded ad for game rewards

#### 5. **HOW_TO_WIN_AD** - How to Win Page
- **Component**: `src/Pages/HowToWin.jsx`
- **Route**: `/how-to-win`
- **Ad Slots**:
  - `BANNER_SLOT_1`: Top banner ad
  - `BANNER_SLOT_2`: Bottom banner ad
  - `ANCHOR_SLOT_1`: Bottom anchor ad

#### 6. **REDEEM_AD** - Redeem Page
- **Component**: `src/Pages/Redeem.jsx`
- **Route**: `/redeem`
- **Ad Slots**:
  - `BANNER_SLOT_1`: Banner ad
  - `ANCHOR_SLOT_1`: Bottom anchor ad

#### 7. **COUNTER_AD** - Counter Pages
- **Component**: `src/Pages/Counter.jsx`
- **Route**: `/count`
- **Ad Slots**:
  - `BANNER_SLOT_1`: Banner ad
  - `ANCHOR_SLOT_1`: Bottom anchor ad

### Ad Slot Configuration Format

Each ad slot follows this structure:
```json
{
  "size": [300, 250],                    // Ad dimensions
  "adUnit": "/6355419/Travel/Europe/France/Paris",  // Ad unit ID
  "format": "BOTTOM_ANCHOR",             // Ad format (for anchor ads) BOTTOM_ANCHOR, TOP_ANCHOR
  "targeting": [["test", "anchor"]],     // Targeting parameters
  "key": "unique-ad-key"                 // Unique identifier
}
```

## 📝 Content Management

### Content Placement Structure

Content can be placed in designated areas within components using this structure:

```jsx
<div>
  {/* Content here */}
</div>
```

### Content Areas by Page

#### 1. **Home Page** (`src/Components/HomeComponent.jsx`)
- **Location**: Bottom of the component after the game grid

#### 2. **How to Win Page** (`src/Components/ProcessFlow.jsx`)
- **Location**: Bottom of the process flow

#### 3. **Counter Page** (`src/Components/InputSection.jsx`)
- **Location**: Bottom of the input section


## 🗂️ Page Structure & Routes

### Main Navigation Flow

```
Home (/home)
├── Quiz Game (/daily-news)
├── Spin Wheel (/spin-wheel)
├── Win Scratch (/scratch-card)
├── Lucky Scratch (/lucky-scratch)
├── How to Win (/how-to-win)
├── Redeem (/redeem)
└── Counter Pages (/count)
    ├── BC Robox Counter
    ├── TBC Robox Counter
    └── OBC Robox Counter
```

### Page Components & Routes

| Page             | Component        | Route                | Description                   |
|------------------|------------------|----------------------|-------------------------------|
| Home             | `HomeComponent`  | `/home`              | Main dashboard with game grid |
| Quiz             | `QuizPage`       | `/daily-news`        | Daily quiz/news functionality |
| Spin Wheel       | `SpinWheel`      | `/spin-wheel`        | Lucky spin game               |
| Scratch Card     | `ScratchCard`    | `/scratch-card`      | Win scratch game              |
| Lucky Scratch    | `ScratchCard`    | `/lucky-scratch`     | Lucky scratch game            |
| How to Win       | `HowToWin`       | `/how-to-win`        | Instructions and process flow |
| Redeem           | `Redeem`         | `/redeem`            | Points redemption interface   |
| Counter          | `Counter`        | `/count`             | RBX counter with variants     |
| About            | `About`          | `/about`             | About page                    |
| Contact          | `Contact`        | `/contact`           | Contact information           |
| Privacy Policy   | `PrivacyPolicy`  | `/privacy-policy`    | Privacy policy                |
| Terms of Service | `TermsOfService` | `/terms-and-service` | Terms and conditions          |

## 🚀 Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd Robox

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Configuration

#### Ad Configuration
Update `src/utils/AdConfig.json` with your ad unit IDs:
```json
{
  "HOME_AD": {
    "BANNER_SLOT_1": {
      "adUnit": "your-ad-unit-id-here"
    }
  }
}
```

#### Google Publisher Tag
Ensure GPT is loaded in `index.html`:
```html
<script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" async></script>
```

## 🎯 Points System

### Features
- **Local Storage**: Points persist in browser localStorage
- **Daily Limits**: Feature usage tracking (default: 3 uses/day)
- **Context Provider**: Global state management
- **Rewards**: Points earned through games

### Usage
```javascript
import { usePoints } from './PointsProvider';

const { points, add, subtract } = usePoints();
```

## 🔧 Customization

### Adding New Pages
1. Create component in `src/Pages/`
2. Add route in `src/Router/Routes.jsx`
3. Add ad configuration in `src/utils/AdConfig.json`
4. Update navigation in `src/Components/HomeComponent.jsx`

### Modifying Ad Configuration
1. Update `src/utils/AdConfig.json`
2. Modify ad slots in components
3. Test ad loading and performance

### Content Updates
1. Locate content areas in components
2. Replace placeholder content
3. Ensure mobile optimization
4. Test ad integration

## 🚀 Deployment

### Vercel Deployment
The project is configured for Vercel deployment with `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Build Process
```bash
npm run build
```

### Environment Variables
- No sensitive environment variables required
- Ad configuration handled through JSON file
- Points system uses localStorage