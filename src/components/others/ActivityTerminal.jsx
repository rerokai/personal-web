import { useState, useEffect } from 'react';

const logs = [
    { text: 'Drinking another cup of coffee' },
    { text: 'Clicking circles in Osu!' },
    { text: 'Deploying cool things' },
    { text: 'Listening another cool track' },
    { text: 'rm -rf /*' },
    { text: 'Thinking about something...' },
];

const ActivityTerminal = () => {
    const [lines, setLines] = useState(['> System initialized...']);

    useEffect(() => {
        const interval = setInterval(() => {
            setLines(prev => {
                const nextLog = logs[Math.floor(Math.random() * logs.length)];
                const newLines = [...prev, `> ${nextLog.text}`];
                if (newLines.length > 6) newLines.shift();
                return newLines;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full bg-[#0d1117] border border-white/10 rounded-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-[10px] text-white/30 font-mono">bash — 80x24</span>
            </div>
            
            <div className="flex-1 pt-10 p-4 font-mono text-xs md:text-sm z-20 text-left flex flex-col justify-end">
                {lines.map((line, i) => (
                    <div key={i} className="text-green-400/90 truncate">
                        <span className="opacity-40 mr-2 text-white">~</span>
                        {line}
                    </div>
                ))}
                <div className="text-green-400 animate-pulse font-bold mt-1">_</div>
            </div>
            
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-size-[100%_4px,6px_100%]" />
        </div>
    );
};

export default ActivityTerminal;