function KMATeamPage() {
    const players = [
        { nickname: "Errorlfg", role: "Carry", position: 1, color: "from-red-500 to-orange-500" },
        { nickname: "Pinkie Pie", role: "Mid Lane", position: 2, color: "from-pink-500 to-rose-500" },
        { nickname: "V1lichaishy", role: "Offlane", position: 3, color: "from-purple-500 to-pink-500" },
        { nickname: "Fluttershy", role: "Support", position: 4, color: "from-emerald-500 to-teal-500" },
        { nickname: "SpikeFurry", role: "Hard Support", position: 5, color: "from-gray-500 to-zinc-700" }
    ];

    return React.createElement('div', {
        className: "min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white relative overflow-x-hidden"
    },
        // Фоновые эффекты
        React.createElement('div', { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" }),
        React.createElement('div', { className: "absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[100px] opacity-20" }),
        React.createElement('div', { className: "absolute bottom-20 right-10 w-96 h-96 bg-pink-600 rounded-full blur-[120px] opacity-20" }),
        
        // Main Content
        React.createElement('main', { className: "relative z-10 max-w-6xl mx-auto px-6 py-16" },
            // Hero секция
            React.createElement('div', { className: "text-center mb-20" },
                React.createElement('div', { className: "inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10" },
                    React.createElement('div', { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }),
                    React.createElement('span', { className: "text-xs uppercase tracking-[0.2em] text-zinc-400" }, "Active Roster")
                ),
                React.createElement('h1', { className: "text-7xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent" }, "KMA TEAM"),
                React.createElement('p', { className: "text-xl text-zinc-400 mt-6 max-w-2xl mx-auto" }, "Professional Dota 2 esports squad. Domination. Precision. Victory.")
            ),
            
            // Сетка игроков
            React.createElement('div', { className: "mb-24" },
                React.createElement('h2', { className: "text-3xl font-bold mb-8 text-center" }, "Main Roster"),
                React.createElement('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
                    players.map((player, index) => 
                        React.createElement('div', { key: index, className: "group relative" },
                            React.createElement('div', { className: "absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300" }),
                            React.createElement('div', { className: "relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all" },
                                React.createElement('div', { className: "flex justify-between items-start" },
                                    React.createElement('div', {},
                                        React.createElement('div', { className: "text-sm uppercase tracking-[0.25em] text-zinc-400" }, `Position ${player.position}`),
                                        React.createElement('h3', { className: "text-3xl font-bold mt-2" }, player.nickname),
                                        React.createElement('p', { className: "text-zinc-300 mt-1" }, player.role)
                                    ),
                                    React.createElement('div', { className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${player.color} shadow-2xl` })
                                )
                            )
                        )
                    )
                )
            ),
            
            // Статистика
            React.createElement('section', { className: "mt-24" },
                React.createElement('div', { className: "rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl" },
                    React.createElement('div', { className: "grid md:grid-cols-3 gap-8 text-center" },
                        React.createElement('div', {},
                            React.createElement('div', { className: "text-5xl font-black text-purple-400" }, "5"),
                            React.createElement('p', { className: "mt-2 text-zinc-400 uppercase tracking-[0.2em]" }, "Players")
                        ),
                        React.createElement('div', {},
                            React.createElement('div', { className: "text-5xl font-black text-pink-400" }, "∞"),
                            React.createElement('p', { className: "mt-2 text-zinc-400 uppercase tracking-[0.2em]" }, "Potential")
                        ),
                        React.createElement('div', {},
                            React.createElement('div', { className: "text-5xl font-black text-cyan-400" }, "KMA"),
                            React.createElement('p', { className: "mt-2 text-zinc-400 uppercase tracking-[0.2em]" }, "Never Back Down")
                        )
                    )
                )
            )
        ),
        
        // Footer
        React.createElement('footer', { className: "relative z-10 border-t border-white/10 py-8 mt-20 text-center text-zinc-500 text-sm" },
            "© 2026 KMA TEAM — Dota 2 Esports Squad"
        )
    );
}

// Рендеринг приложения
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(KMATeamPage));