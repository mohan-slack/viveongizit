
import React from 'react';

const FuturisticCityscape: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-[-1]">
      {/* Stars background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-viveon-dark via-viveon-darker to-black"></div>
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const animationDuration = Math.random() * 3 + 2;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${animationDuration}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Cityscape silhouette */}
      <div className="absolute bottom-0 left-0 w-[200%] h-[30vh] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjMwMCI+PHBhdGggZmlsbD0iIzFlMjIyNyIgZD0iTTAgMGgxMjAwdjMwMEgweiIvPjxyZWN0IHg9IjAiIHk9IjE1MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9IjMwIiB5PSIyMDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMwRDBGMTIiLz48cmVjdCB4PSI2MCIgeT0iMTIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iMTAwIiB5PSI1MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9IjE1MCIgeT0iMTAwIiB3aWR0aD0iMzAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iMTkwIiB5PSIxNzAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMzAiIGZpbGw9IiMwRDBGMTIiLz48cmVjdCB4PSIyMjAiIHk9IjUwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iMjcwIiB5PSIxMjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxODAiIGZpbGw9IiMwRDBGMTIiLz48cmVjdCB4PSIzMTAiIHk9IjE1MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9IjM0MCIgeT0iODAiIHdpZHRoPSI1MCIgaGVpZ2h0PSIyMjAiIGZpbGw9IiMwRDBGMTIiLz48cmVjdCB4PSI0MDAiIHk9IjEwIiB3aWR0aD0iMzUiIGhlaWdodD0iMjkwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iNDUwIiB5PSIxNTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMwRDBGMTIiLz48cmVjdCB4PSI0ODAiIHk9IjEwMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9IjUzMCIgeT0iMTUwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTUwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iNTYwIiB5PSI3MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIzMCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9IjYxMCIgeT0iMTcwIiB3aWR0aD0iMzAiIGhlaWdodD0iMTMwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iNjUwIiB5PSI1MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9IjcwNSIgeT0iMTIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iNzQ1IiB5PSIxNTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMwRDBGMTIiLz48cmVjdCB4PSI3NzUiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMwRDBGMTIiLz48cmVjdCB4PSI4MjUiIHk9IjEwMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9Ijg2NSIgeT0iMTYwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTQwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iODk1IiB5PSI5MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIxMCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9Ijk0NSIgeT0iMTIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iOTg1IiB5PSIxNTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMwRDBGMTIiLz48cmVjdCB4PSIxMDE1IiB5PSI3MCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjIzMCIgZmlsbD0iIzBEMEYxMiIvPjxyZWN0IHg9IjEwNzUiIHk9IjIwIiB3aWR0aD0iMzUiIGhlaWdodD0iMjgwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iMTEyMCIgeT0iMTUwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTUwIiBmaWxsPSIjMEQwRjEyIi8+PHJlY3QgeD0iMTE1MCIgeT0iMTAwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMEQwRjEyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] bg-repeat-x animate-cityMove opacity-80"></div>

      {/* Neon Grid Lines */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.3) 25%, rgba(0, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.3) 75%, rgba(0, 255, 255, 0.3) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}>
      </div>

      {/* Flying vehicles */}
      {[...Array(5)].map((_, i) => {
        const size = Math.random() * 3 + 2;
        const top = Math.random() * 50 + 10;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const direction = i % 2 === 0 ? 'ltr' : 'rtl';
        
        return (
          <div
            key={i}
            className={`absolute h-1 animate-pulse`}
            style={{
              top: `${top}%`,
              left: direction === 'ltr' ? '-5%' : '105%',
              width: `${size}px`,
              backgroundColor: i % 3 === 0 ? '#FF3A2F' : (i % 3 === 1 ? '#00FFFF' : '#9B30FF'),
              boxShadow: `0 0 10px currentColor, 0 0 20px currentColor`,
              animation: `${direction === 'ltr' ? 'moveLeftToRight' : 'moveRightToLeft'} ${duration}s linear ${delay}s infinite`,
            }}
          ></div>
        );
      })}

      {/* Distant city glow */}
      <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-t from-viveon-red/20 to-transparent"></div>
      
      {/* Style for the flying vehicles */}
      <style jsx>{`
        @keyframes moveLeftToRight {
          from { left: -5%; }
          to { left: 105%; }
        }
        @keyframes moveRightToLeft {
          from { left: 105%; }
          to { left: -5%; }
        }
      `}</style>
    </div>
  );
};

export default FuturisticCityscape;
