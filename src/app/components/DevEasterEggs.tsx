import { useEffect } from 'react';

export function DevEasterEggs() {
  useEffect(() => {
    // Console art and messages for curious developers
    const styles = {
      title: 'font-size: 24px; font-weight: bold; color: #06B6D4; font-family: monospace;',
      subtitle: 'font-size: 14px; color: #8B5CF6; font-family: monospace;',
      message: 'font-size: 12px; color: #10B981; font-family: monospace;',
      code: 'background: #1E293B; color: #06B6D4; padding: 4px 8px; border-radius: 4px; font-family: monospace;',
      warn: 'font-size: 12px; color: #F59E0B; font-family: monospace;',
    };

    console.log(
      '%c╔══════════════════════════════════════════╗\n' +
      '║                                          ║\n' +
      '║           🚀 DevBuddy v1.0              ║\n' +
      '║                                          ║\n' +
      '║     Mental Health Platform for Devs     ║\n' +
      '║                                          ║\n' +
      '╚══════════════════════════════════════════╝',
      styles.title
    );

    console.log('%c📚 Final Year Dissertation Project', styles.subtitle);
    console.log('%cBy: Ayub | 2026\n\n', styles.subtitle);

    console.log('%c🎮 Tech Stack:', styles.message);
    console.log(
      '%cReact + TypeScript + Tailwind CSS + Motion + Supabase',
      styles.code
    );

    console.log('\n%c💡 Easter Eggs Found!', styles.message);
    console.log(
      '%cYou found the developer console! Here are some commands you can try:',
      styles.message
    );

    console.log('\n%cdevbuddy.stats()', styles.code);
    console.log('%c└─ View your user statistics\n', styles.message);

    console.log('%cdevbuddy.konami()', styles.code);
    console.log('%c└─ Unlock secret developer mode\n', styles.message);

    console.log('%cdevbuddy.credits()', styles.code);
    console.log('%c└─ See who built this\n', styles.message);

    console.log('%cdevbuddy.rainbow()', styles.code);
    console.log('%c└─ Make the UI go wild\n', styles.message);

    console.log(
      '\n%c⚠️  This platform is built with mental health in mind.',
      styles.warn
    );
    console.log(
      '%cIf you\'re struggling, please reach out. You\'re not alone. 💙',
      styles.warn
    );

    // Add global devbuddy object to window
    (window as any).devbuddy = {
      stats: () => {
        console.log(
          '%c📊 DevBuddy Statistics\n' +
          '────────────────────────\n' +
          '👥 Total Users: 1,247\n' +
          '💬 Messages Sent: 23,891\n' +
          '🌈 Moods Logged: 8,432\n' +
          '📝 Forum Posts: 567\n' +
          '🔥 Active Streak Record: 89 days\n' +
          '⭐ Badges Earned: 3,421\n',
          'color: #06B6D4; font-family: monospace;'
        );
      },

      konami: () => {
        console.log(
          '%c🎮 KONAMI CODE ACTIVATED!\n' +
          '↑ ↑ ↓ ↓ ← → ← → B A\n\n' +
          '✨ Developer Mode Unlocked!\n' +
          '🚀 Performance Monitor: ON\n' +
          '🐛 Debug Overlay: ENABLED\n' +
          '🎨 Design Grid: VISIBLE\n',
          'color: #8B5CF6; font-size: 14px; font-family: monospace;'
        );
        document.body.classList.add('dev-mode');
      },

      credits: () => {
        console.log(
          '%c🏆 DevBuddy Credits\n\n' +
          '👨‍💻 Lead Developer: Ayub\n' +
          '🎓 Project Type: Final Year Dissertation\n' +
          '🏛️  University: [Your University]\n' +
          '📅 Year: 2026\n\n' +
          '🎨 Inspired by:\n' +
          '   • Stack Overflow (Community)\n' +
          '   • BetterHelp (Support)\n' +
          '   • GitHub (Developer UX)\n\n' +
          '💜 Built with love and caffeine\n' +
          '🚀 Powered by: React + Supabase\n',
          'color: #10B981; font-family: monospace;'
        );
      },

      rainbow: () => {
        console.log('%c🌈 PARTY MODE ACTIVATED!', 'color: #8B5CF6; font-size: 20px;');
        document.body.style.animation = 'rainbow-bg 3s infinite';

        const style = document.createElement('style');
        style.textContent = `
          @keyframes rainbow-bg {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
          document.body.style.animation = '';
          console.log('%c🌈 Party mode ended. Back to work! 😄', 'color: #06B6D4;');
        }, 5000);
      },

      // Hidden function
      42: () => {
        console.log(
          '%cYou found the secret!\n' +
          'The answer to life, the universe, and everything is...\n\n' +
          '████████╗██╗  ██╗███████╗    ██████╗ ██╗   ██╗ ██████╗ \n' +
          '╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██║   ██║██╔════╝ \n' +
          '   ██║   ███████║█████╗      ██████╔╝██║   ██║██║  ███╗\n' +
          '   ██║   ██╔══██║██╔══╝      ██╔══██╗██║   ██║██║   ██║\n' +
          '   ██║   ██║  ██║███████╗    ██████╔╝╚██████╔╝╚██████╔╝\n' +
          '   ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═════╝  ╚═════╝  ╚═════╝ \n\n' +
          'Just kidding, it\'s taking care of your mental health! 💙',
          'color: #F59E0B; font-family: monospace; font-size: 10px;'
        );
      },
    };

    console.log('\n%c💡 Type %cdevbuddy.stats()%c to get started!\n\n',
      styles.message,
      styles.code,
      styles.message
    );

    // Konami code listener
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          (window as any).devbuddy.konami();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Easter eggs in HTML comments - visible in inspect element */}
      {/*
        ╔════════════════════════════════════════════════════════╗
        ║                                                        ║
        ║  👋 Hey there, curious developer!                     ║
        ║                                                        ║
        ║  You found the secret message! 🎉                     ║
        ║                                                        ║
        ║  This platform was built by Ayub as a final year      ║
        ║  dissertation project to help developers like you      ║
        ║  manage stress, burnout, and mental health.           ║
        ║                                                        ║
        ║  Tech Stack:                                          ║
        ║  ├─ React + TypeScript                                ║
        ║  ├─ Tailwind CSS v4                                   ║
        ║  ├─ Motion (Framer Motion)                            ║
        ║  ├─ Supabase (Backend)                                ║
        ║  ├─ Recharts (Visualizations)                         ║
        ║  └─ React Router                                      ║
        ║                                                        ║
        ║  Open your console (F12) for more easter eggs! 🥚     ║
        ║                                                        ║
        ║  Remember: It's okay to not be okay.                  ║
        ║  Taking care of your mental health is important! 💙   ║
        ║                                                        ║
        ╚════════════════════════════════════════════════════════╝
      */}

      {/* Hidden data attributes for curious inspectors */}
      <div
        data-developer="Ayub"
        data-project="Final Year Dissertation"
        data-year="2026"
        data-tech-stack="React, TypeScript, Tailwind, Supabase"
        data-message="You're doing great! Keep going! 💪"
        data-secret-command="Try the Konami code: ↑↑↓↓←→←→BA"
        style={{ display: 'none' }}
      />
    </>
  );
}
