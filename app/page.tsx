"use client";

import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("all");

  const groups = [
    {
      name: "Group A",
      teams: [
        { name: "Mexico", played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 2, pts: 7 },
        { name: "Uruguay", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 3, pts: 6 },
        { name: "South Korea", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 4, pts: 4 },
        { name: "Jamaica", played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 7, pts: 0 },
      ],
    },
    {
      name: "Group B",
      teams: [
        { name: "Spain", played: 3, won: 3, drawn: 0, lost: 0, gf: 8, ga: 1, pts: 9 },
        { name: "Italy", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 4, pts: 4 },
        { name: "Croatia", played: 3, won: 1, drawn: 1, lost: 1, gf: 3, ga: 3, pts: 4 },
        { name: "Costa Rica", played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 8, pts: 0 },
      ],
    },
    {
      name: "Group C",
      teams: [
        { name: "England", played: 3, won: 2, drawn: 1, lost: 0, gf: 7, ga: 2, pts: 7 },
        { name: "USA", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 3, pts: 6 },
        { name: "Serbia", played: 3, won: 1, drawn: 1, lost: 1, gf: 3, ga: 4, pts: 4 },
        { name: "Iran", played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 8, pts: 0 },
      ],
    },
    {
      name: "Group D",
      teams: [
        { name: "France", played: 3, won: 2, drawn: 1, lost: 0, gf: 7, ga: 3, pts: 7 },
        { name: "Netherlands", played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 2, pts: 7 },
        { name: "Australia", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, pts: 3 },
        { name: "Tunisia", played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 7, pts: 0 },
      ],
    },
    {
      name: "Group E",
      teams: [
        { name: "Brazil", played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 1, pts: 7 },
        { name: "Switzerland", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 4, pts: 6 },
        { name: "Cameroon", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 4, pts: 4 },
        { name: "New Zealand", played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 8, pts: 0 },
      ],
    },
    {
      name: "Group F",
      teams: [
        { name: "Argentina", played: 3, won: 2, drawn: 0, lost: 1, gf: 7, ga: 3, pts: 6 },
        { name: "Poland", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 4, pts: 6 },
        { name: "Saudi Arabia", played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 6, pts: 3 },
        { name: "Panama", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 6, pts: 3 },
      ],
    },
    {
      name: "Group G",
      teams: [
        { name: "Belgium", played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 2, pts: 7 },
        { name: "Portugal", played: 3, won: 2, drawn: 0, lost: 1, gf: 7, ga: 4, pts: 6 },
        { name: "Morocco", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 4, pts: 4 },
        { name: "Canada", played: 3, won: 0, drawn: 0, lost: 3, gf: 2, ga: 9, pts: 0 },
      ],
    },
    {
      name: "Group H",
      teams: [
        { name: "Germany", played: 3, won: 2, drawn: 1, lost: 0, gf: 8, ga: 3, pts: 7 },
        { name: "Japan", played: 3, won: 1, drawn: 2, lost: 0, gf: 4, ga: 3, pts: 5 },
        { name: "Ghana", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, pts: 3 },
        { name: "Ecuador", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 6, pts: 1 },
      ],
    },
    {
      name: "Group I",
      teams: [
        { name: "Colombia", played: 3, won: 3, drawn: 0, lost: 0, gf: 7, ga: 1, pts: 9 },
        { name: "Senegal", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 4, pts: 4 },
        { name: "Egypt", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, pts: 3 },
        { name: "Honduras", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 6, pts: 1 },
      ],
    },
    {
      name: "Group J",
      teams: [
        { name: "Denmark", played: 3, won: 2, drawn: 1, lost: 0, gf: 5, ga: 1, pts: 7 },
        { name: "Ukraine", played: 3, won: 1, drawn: 2, lost: 0, gf: 4, ga: 3, pts: 5 },
        { name: "Nigeria", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, pts: 3 },
        { name: "Paraguay", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 5, pts: 1 },
      ],
    },
    {
      name: "Group K",
      teams: [
        { name: "Sweden", played: 3, won: 2, drawn: 0, lost: 1, gf: 6, ga: 3, pts: 6 },
        { name: "Algeria", played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 4, pts: 6 },
        { name: "Peru", played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 4, pts: 4 },
        { name: "China PR", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 6, pts: 1 },
      ],
    },
    {
      name: "Group L",
      teams: [
        { name: "Chile", played: 3, won: 2, drawn: 1, lost: 0, gf: 6, ga: 2, pts: 7 },
        { name: "Norway", played: 3, won: 1, drawn: 2, lost: 0, gf: 4, ga: 3, pts: 5 },
        { name: "Mali", played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, pts: 3 },
        { name: "Iraq", played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 5, pts: 1 },
      ],
    },
  ];

  const fixtures = [
    { date: "June 11, 2026", time: "17:00", home: "Mexico", away: "Jamaica", homeScore: "2", awayScore: "0", venue: "Estadio Azteca, Mexico City", status: "FT" },
    { date: "June 11, 2026", time: "20:00", home: "Uruguay", away: "South Korea", homeScore: "1", awayScore: "1", venue: "SoFi Stadium, Los Angeles", status: "FT" },
    { date: "June 12, 2026", time: "14:00", home: "Spain", away: "Costa Rica", homeScore: "3", awayScore: "0", venue: "MetLife Stadium, New York", status: "FT" },
    { date: "June 12, 2026", time: "17:00", home: "Italy", away: "Croatia", homeScore: "1", awayScore: "1", venue: "Mercedes-Benz Stadium, Atlanta", status: "FT" },
    { date: "June 13, 2026", time: "15:00", home: "England", away: "Iran", homeScore: "3", awayScore: "0", venue: "BC Place, Vancouver", status: "FT" },
    { date: "June 13, 2026", time: "18:00", home: "USA", away: "Serbia", homeScore: "2", awayScore: "1", venue: "Levi's Stadium, San Francisco", status: "FT" },
    { date: "June 14, 2026", time: "16:00", home: "France", away: "Australia", homeScore: "2", awayScore: "1", venue: "AT&T Stadium, Dallas", status: "FT" },
    { date: "June 14, 2026", time: "19:00", home: "Netherlands", away: "Tunisia", homeScore: "3", awayScore: "0", venue: "Arrowhead Stadium, Kansas City", status: "FT" },
    { date: "June 15, 2026", time: "14:00", home: "Brazil", away: "Cameroon", homeScore: "2", awayScore: "0", venue: "Hard Rock Stadium, Miami", status: "FT" },
    { date: "June 15, 2026", time: "17:00", home: "Switzerland", away: "New Zealand", homeScore: "3", awayScore: "1", venue: "Lincoln Financial Field, Philadelphia", status: "FT" },
    { date: "June 16, 2026", time: "15:00", home: "Argentina", away: "Saudi Arabia", homeScore: "1", awayScore: "2", venue: "NRG Stadium, Houston", status: "FT" },
    { date: "June 16, 2026", time: "18:00", home: "Poland", away: "Panama", homeScore: "2", awayScore: "0", venue: "BMO Field, Toronto", status: "FT" },
    { date: "June 17, 2026", time: "TBD", home: "Mexico", away: "Uruguay", homeScore: "TBD", awayScore: "TBD", venue: "Estadio BBVA, Monterrey", status: "Upcoming" },
    { date: "June 17, 2026", time: "TBD", home: "South Korea", away: "Jamaica", homeScore: "TBD", awayScore: "TBD", venue: "SoFi Stadium, Los Angeles", status: "Upcoming" },
    { date: "June 18, 2026", time: "TBD", home: "Spain", away: "Italy", homeScore: "TBD", awayScore: "TBD", venue: "MetLife Stadium, New York", status: "Upcoming" },
    { date: "June 18, 2026", time: "TBD", home: "Croatia", away: "Costa Rica", homeScore: "TBD", awayScore: "TBD", venue: "Mercedes-Benz Stadium, Atlanta", status: "Upcoming" },
  ];

  const topScorers = [
    { name: "Kylian Mbappé", team: "France", goals: 6, matches: 3 },
    { name: "Harry Kane", team: "England", goals: 5, matches: 3 },
    { name: "Lionel Messi", team: "Argentina", goals: 5, matches: 3 },
    { name: "Cristiano Ronaldo", team: "Portugal", goals: 4, matches: 3 },
    { name: "Bukayo Saka", team: "England", goals: 4, matches: 3 },
    { name: "Vinícius Júnior", team: "Brazil", goals: 4, matches: 3 },
    { name: "Álvaro Morata", team: "Spain", goals: 4, matches: 3 },
    { name: "Hirving Lozano", team: "Mexico", goals: 3, matches: 3 },
    { name: "Luis Suárez", team: "Uruguay", goals: 3, matches: 3 },
    { name: "Memphis Depay", team: "Netherlands", goals: 3, matches: 3 },
  ];

  const knockoutMatches = [
    { round: "Round of 32", match: 1, team1: "Mexico", team2: "TBD", score1: "", score2: "" },
    { round: "Round of 32", match: 2, team1: "Spain", team2: "TBD", score1: "", score2: "" },
    { round: "Round of 32", match: 3, team1: "England", team2: "TBD", score1: "", score2: "" },
    { round: "Round of 32", match: 4, team1: "France", team2: "TBD", score1: "", score2: "" },
    { round: "Round of 32", match: 5, team1: "Brazil", team2: "TBD", score1: "", score2: "" },
    { round: "Round of 32", match: 6, team1: "Argentina", team2: "TBD", score1: "", score2: "" },
    { round: "Round of 32", match: 7, team1: "Belgium", team2: "TBD", score1: "", score2: "" },
    { round: "Round of 32", match: 8, team1: "Germany", team2: "TBD", score1: "", score2: "" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-sm font-bold tracking-wider">
              FIFA WORLD CUP 2026
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
              FESTRUDICUP
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-300 mb-4 font-semibold">
              48 Teams • 16 Venues • 3 Nations
            </p>
            <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto">
              Experience the largest World Cup in history across the United States, Canada, and Mexico. Track every match, every goal, and every moment of glory.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-cyan-400 mb-2">48</div>
                <div className="text-slate-300 font-semibold">Teams Competing</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-cyan-400 mb-2">104</div>
                <div className="text-slate-300 font-semibold">Total Matches</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-cyan-400 mb-2">16</div>
                <div className="text-slate-300 font-semibold">Host Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Standings Section */}
      <section id="group-standings" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Group Standings
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">12 groups of 4 teams competing for knockout stage spots</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div key={group.name} className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4">
                  <h3 className="text-xl font-black">{group.name}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs text-slate-400 border-b border-slate-700">
                        <th className="text-left p-3 font-semibold">Team</th>
                        <th className="p-3 font-semibold">P</th>
                        <th className="p-3 font-semibold">W</th>
                        <th className="p-3 font-semibold">D</th>
                        <th className="p-3 font-semibold">L</th>
                        <th className="p-3 font-semibold">GD</th>
                        <th className="p-3 font-semibold">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.teams.map((team, idx) => (
                        <tr key={team.name} className={`border-b border-slate-700/50 hover:bg-blue-600/10 transition-colors ${idx < 2 ? 'bg-cyan-900/20' : ''}`}>
                          <td className="p-3 font-semibold text-sm">{team.name}</td>
                          <td className="p-3 text-center text-sm">{team.played}</td>
                          <td className="p-3 text-center text-sm">{team.won}</td>
                          <td className="p-3 text-center text-sm">{team.drawn}</td>
                          <td className="p-3 text-center text-sm">{team.lost}</td>
                          <td className="p-3 text-center text-sm">{team.gf - team.ga}</td>
                          <td className="p-3 text-center font-bold text-cyan-400 text-sm">{team.pts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixtures Section */}
      <section id="fixtures" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Match Fixtures
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">Live scores and upcoming matches across all venues</p>
          
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              All Matches
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === "completed"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Upcoming
            </button>
          </div>

          <div className="space-y-4">
            {fixtures
              .filter(
                (fixture) =>
                  activeTab === "all" ||
                  (activeTab === "completed" && fixture.status === "FT") ||
                  (activeTab === "upcoming" && fixture.status === "Upcoming")
              )
              .map((fixture, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xs text-cyan-400 font-semibold mb-2">
                        {fixture.date} • {fixture.time}
                      </div>
                      <div className="text-sm text-slate-400">{fixture.venue}</div>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center gap-6">
                      <div className="text-right flex-1">
                        <div className="text-lg font-bold">{fixture.home}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl font-black ${fixture.status === "FT" ? "text-cyan-400" : "text-slate-600"}`}>
                          {fixture.homeScore}
                        </div>
                        <div className="text-slate-500 font-bold">-</div>
                        <div className={`text-3xl font-black ${fixture.status === "FT" ? "text-cyan-400" : "text-slate-600"}`}>
                          {fixture.awayScore}
                        </div>
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-lg font-bold">{fixture.away}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-right">
                      <span
                        className={`inline-block px-4 py-2 rounded-full text-xs font-bold ${
                          fixture.status === "FT"
                            ? "bg-green-500/20 text-green-400 border border-green-500/50"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                        }`}
                      >
                        {fixture.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Knockout Bracket Section */}
      <section id="knockout-bracket" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Knockout Stage
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">Road to the final across the elimination rounds</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Round of 32</h3>
              <div className="space-y-4">
                {knockoutMatches.slice(0, 8).map((match) => (
                  <div key={match.match} className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">{match.team1}</span>
                      <span className="text-slate-600 font-bold">-</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-400">{match.team2}</span>
                      <span className="text-slate-600 font-bold">-</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Round of 16</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((match) => (
                  <div key={match} className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 opacity-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">TBD</span>
                      <span className="text-slate-600 font-bold">-</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-400">TBD</span>
                      <span className="text-slate-600 font-bold">-</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Quarter Finals</h3>
              <div className="space-y-4">