"use client";
import { useState } from "react";
import FeatureGrid from "./components/FeatureGrid";
import Header from "./components/Header";
import HistoryPanel from "./components/HistoryPanel";
import tabs from "./data/tabs";
import { HistoryItem, Tab } from "./types";
import CodeExplanation from "./components/CodeExplanation";
import CodeDebugging from "./components/CodeDebugging";
import CodeGeneration from "./components/CodeGeneration";

export default function Home() {

  const [activeTab, setActiveTab] = useState<Tab["id"]>("explain")
  const [history, setHistory] = useState<HistoryItem[]>([])

  const addToHistory = (
    type: HistoryItem["type"], 
    input: string, 
    output: string
  ) => {
    const newItem: HistoryItem = {
      id: Date.now(),
      type,
      timestamp: new Date().toLocaleString(),
      input,
      output,
    };
    setHistory((prev) => [newItem, ...prev.slice(0, 9)]);
  }

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-lg"/>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-lg"/>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pin-500 rounded-lg"/>
        </div>
      </div>
      <main className="relative z-10 container mx-auto px-4 py-8">
        <Header />
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl">
              <div className="flex border-b border-gray-700/50 bg-gray-900/50 p-2">
                {tabs.map((tab) => (
                  <button key={tab.id} 
                    className={`flex ietms-center px-6 py-3 rounded-lg font-semibld transition-all ${
                      activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                      }`}
                    onClick={() => setActiveTab(tab.id)}>
                      <span className="text-xl mr-2">{tab.icon}</span>
                      {tab.label}
                  </button>
                ))}
              </div>
              <div className="p-6">
                {activeTab === "explain" && (
                  <CodeExplanation addToHistory={addToHistory} />
                )}
                {activeTab === "debug" && (
                  <CodeDebugging addToHistory={addToHistory} />
                )}
                {activeTab === "generate" && (
                  <CodeGeneration addToHistory={addToHistory}/>
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <HistoryPanel history={history}/>
          </div>
        </div>
        <FeatureGrid />
      </main>
      <footer className="relative z-10 text-center py-8 text-gray-400">
        <p>Powered by Google Gemini AI</p>
      </footer>
    </>
  );
}
