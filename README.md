# TodoMobileApp

A React Native mobile todo app with task management and statistics tracking.

## Features

- ✅ Create, complete, and delete tasks
- 📊 View task statistics (completion rate, pending tasks)
- 💾 Persistent storage using AsyncStorage
- 🎨 Clean Material Design UI with react-native-paper
- 📱 Cross-platform (iOS, Android, Web)

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

```bash
npm install
```

### Running the App

**Development server:**
```bash
npm start
```

**On Android:**
```bash
npm run android
```

**On iOS:**
```bash
npm run ios
```

**On Web:**
```bash
npm run web
```

## Project Structure

```
TodoMobileApp/
├── App.tsx              # Main app component with navigation
├── app.json             # Expo configuration
├── package.json         # Dependencies
├── screens/
│   ├── TodoScreen.tsx   # Todo list management
│   └── StatsScreen.tsx  # Statistics dashboard
└── assets/              # App icons and splash screens
```

## Usage

1. **Add Tasks**: Type in the input field and tap "Add"
2. **Complete Tasks**: Tap the checkbox to mark tasks as complete
3. **Delete Tasks**: Tap the trash icon to remove a task
4. **View Stats**: Switch to the "Stats" tab to see your progress

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - App navigation
- **React Native Paper** - UI components
- **AsyncStorage** - Local data persistence
- **TypeScript** - Type safety

## License

MIT
