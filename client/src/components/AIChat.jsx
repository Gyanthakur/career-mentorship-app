import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FiCopy, FiCheck, FiX, FiMessageCircle } from "react-icons/fi";

// Bold text rendering
function renderWithBold(str) {
	return str.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
		chunk.startsWith("**") && chunk.endsWith("**") ? (
			<strong key={i} className="font-bold">
				{chunk.slice(2, -2)}
			</strong>
		) : (
			chunk
		)
	);
}

const ChatAi = () => {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [copiedIdx, setCopiedIdx] = useState(-1);
	const chatEndRef = useRef(null);

	// Load chat history
	useEffect(() => {
		const savedChats = localStorage.getItem("chatHistory");
		if (savedChats) setMessages(JSON.parse(savedChats));
	}, []);

	// Save chat history + scroll to bottom
	useEffect(() => {
		localStorage.setItem("chatHistory", JSON.stringify(messages));
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const handleCopy = async (content, idx) => {
		try {
			await navigator.clipboard.writeText(content);
			setCopiedIdx(idx);
			setTimeout(() => setCopiedIdx(-1), 1400);
		} catch {}
	};

	const handleSend = async () => {
		if (!input.trim()) return;

		const userMessage = { role: "user", content: input };
		setMessages((prev) => [...prev, userMessage]);
		setInput("");
		setLoading(true);

		try {
			const res = await axios.post("http://localhost:4000/api/chat", {
				message: input,
			});
			const aiMessage = { role: "ai", content: res.data.reply };
			setMessages((prev) => [...prev, aiMessage]);
		} catch {
			setMessages((prev) => [
				...prev,
				{ role: "ai", content: "❌ Error: Unable to fetch AI response." },
			]);
		} finally {
			setLoading(false);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<>
			{/* Floating AI Chat button */}
			{!open && (
				<button
					onClick={() => setOpen(true)}
					className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
				>
					<FiMessageCircle className="w-5 h-5" /> AI Chat
				</button>
			)}

			{/* Chat panel */}
			{open && (
				<div className="fixed top-0 right-0 h-[88%] mt-16 mb-4 w-[380px] md:w-[420px] bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black shadow-2xl z-50 flex flex-col rounded-l-2xl">
					{/* Header */}
					<div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
						<h2 className="text-xl font-bold text-blue-600 dark:text-indigo-400">
							💬 Chat with AI
						</h2>
						<button
							onClick={() => setOpen(false)}
							className="text-gray-500 hover:text-red-500 transition"
						>
							<FiX className="w-6 h-6" />
						</button>
					</div>

					{/* Messages */}
					<div className="flex-1 overflow-y-auto px-4 py-3">
						{messages.length === 0 && !loading && (
							<div className="text-gray-400 dark:text-gray-500 text-center italic select-none mt-10">
								Start a conversation with the AI 🤖
							</div>
						)}
						{messages.map((msg, idx) => (
							<div
								key={idx}
								className={`flex ${
									msg.role === "user" ? "justify-end" : "justify-start"
								} mb-3`}
							>
								<div
									className={`relative p-3 rounded-2xl shadow max-w-[80%] whitespace-pre-line break-words text-sm ${
										msg.role === "user"
											? "bg-gradient-to-tr from-blue-600 to-indigo-500 text-white rounded-br-md"
											: "bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 rounded-bl-md border border-gray-100 dark:border-gray-700"
									}`}
								>
									<button
										onClick={() => handleCopy(msg.content, idx)}
										className="absolute top-2 right-3 text-xs text-gray-400 hover:text-blue-500"
									>
										{copiedIdx === idx ? <FiCheck /> : <FiCopy />}
									</button>
									<span className="block text-xs opacity-60 mb-1 font-semibold">
										{msg.role === "user" ? "You" : "AI"}
									</span>
									{renderWithBold(msg.content)}
								</div>
							</div>
						))}
						{loading && (
							<div className="flex justify-start">
								<div className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-2xl shadow animate-pulse w-32 text-xs">
									⏳ AI is typing...
								</div>
							</div>
						)}
						<div ref={chatEndRef}></div>
					</div>

					{/* Input */}
					<div className="p-3 border-t dark:border-gray-700 flex gap-2">
						<textarea
							rows={1}
							className="flex-1 resize-none p-2 bg-white/90 dark:bg-gray-800/80 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
							placeholder="Ask me anything..."
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
							disabled={loading}
						/>
						<button
							onClick={handleSend}
							disabled={loading || !input.trim()}
							className={`px-4 py-2 rounded-xl font-semibold transition shadow text-sm ${
								loading || !input.trim()
									? "bg-gray-300 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
									: "bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
							}`}
						>
							{loading ? "..." : "Send"}
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ChatAi;
